import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // id ile veri çekmek için
  // const { state } = useLocation();
  const navigate = useNavigate();
  // const { email, first_name, last_name, avatar } = state;
  // console.log(state);
  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          setError(false);
          setLoading(false);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };

  // getPerson();  // Sürekli render
  useEffect(() => {
    getPerson();
  }, []);

  // console.log(person);
  const { email, first_name, last_name, avatar } = person;

  if (error) {
    return <NotFound />;
    // } else if (!person) {
    //   return (
    //     <div>
    //       <h3 className="text-center text-danger display-6">
    //         Data is Loading...
    //       </h3>
    //     </div>
    //   );
    // }
  } else if (loading) {
    return (
      <div>
        <h3 className="text-center text-danger display-6">
          Data is Loading...
        </h3>
      </div>
    );
  } else {
    return (
      <div className="container text-center mt-2 p-3 border border-danger border-4 w-50 rounded-5 shadow-lg bg-light">
        <img className="rounded-5" src={avatar} alt="" />
        <h1>
          {" "}
          {first_name} {last_name}
        </h1>
        <h2>{email}</h2>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-warning"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
