import axios from "axios";
import { useState } from "react";

export type Method = "get" | "post" | "put" | "delete";

interface AxiosBody {
  cardId: string;
}

interface UseRequestResponse {
  doRequest: () => Promise<any>;
  errors?: any[];
  loading: boolean;
}

interface UseRequestProps {
  method: Method;
  url: string;
  onSuccess: (data: any) => void;
  body?: AxiosBody;
}

const useRequest = ({
  method,
  url,
  body,
  onSuccess,
}: UseRequestProps): UseRequestResponse => {
  const [errors, setErrors] = useState<any[]>();
  const [loading, setloading] = useState(true);

  const doRequest = async () => {
    try {
      setErrors([]);
      const response = await axios[method](url, {
        ...body,
      });
      setloading(false);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err: any) {
      setErrors(err?.response?.data.errors);
      setloading(false);
    }
  };

  return { doRequest, errors, loading };
};

export default useRequest;
