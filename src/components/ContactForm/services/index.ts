import Api from "../../../services/api";

export const sendContact = async(data: any): Promise<any> => {
  const res = await Api.post('newsletter', data);
  return res;
}