import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>Url Parameterです</h1>
      <p>パラメーターは　{id}です</p>
      <p>パラメーターは　{query.get("name")}です</p>
    </div>
  );
};
