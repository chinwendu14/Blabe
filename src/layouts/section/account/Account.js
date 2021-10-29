import "./acount.scss";
const Account = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row advert__color">
          <div className="col-md-6">
            <p>
              Get started today sign up
              <br /> and start reveiwing business.{" "}
            </p>
          </div>

          <div className="col-md-6 advert__btn">
            <button class="btn btn-outline-success" type="submit">
              Create free Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
