import axios from "axios";

const queryParams = {
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  returnType: "xml",
  numOfRows: 100,
  pageNo: 1,
  sidoName: "서울",
  ver: "1.0",
};
export async function getFinedustalaram() {
  const response = await axios.get(
    "B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
    {
      params: queryParams,
    }
  );
  return response.data;
}
