import Api from "../../../services/api"

export const getProducts = async(): Promise<any> => {
  const res = await Api.get('products');
  return res;
}