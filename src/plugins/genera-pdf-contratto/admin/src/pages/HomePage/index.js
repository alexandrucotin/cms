import {
  BaseHeaderLayout,
  Button,
  ContentLayout,
  Layout,
  SingleSelect,
  SingleSelectOption,
} from "@strapi/design-system";
import React, { useEffect, useState } from "react";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../components/pdf";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import { contractRequest } from "../../../api/contracts";

const HomePage = () => {
  const [value, setValue] = useState();
  const [contracts, setContracts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) setIsLoading(true);
      const contracts = await contractRequest.getAllContracts();
      console.log("Contracts: ", contracts);
      setContracts(contracts);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getSelectedContract = () => {
    console.log("VALUE: ", typeof value);
    console.log(
      "VALUE: ",
      contracts.filter((contract) => {
        console.log("Contract value: ", contract);
      })
    );
    return contracts.find((contract) => parseInt(value) === contract.id);
  };

  if (isLoading) return <LoadingIndicatorPage />;
  return (
    <Layout sideNav={undefined}>
      <BaseHeaderLayout title="Genera PDF Contratto" as="h2" />
      <ContentLayout>
        <SingleSelect
          label="Seleziona contratto da scaricare"
          placeholder="My favourite fruit is..."
          value={value}
          onChange={setValue}
          error={undefined}
          hint={undefined}
          id={undefined}
          labelAction={undefined}
          required={undefined}
          selectButtonTitle={undefined}
        >
          {contracts.map((option, index) => (
            <SingleSelectOption value={option.id} key={index}>
              {option.nome}
            </SingleSelectOption>
          ))}
        </SingleSelect>
        {value && (
          <PDFDownloadLink
            document={<MyDocument contract={getSelectedContract()} />}
            fileName="somenamehhhh.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        )}
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
