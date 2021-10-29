import "./newsletter.scss";
import mail from "../../../assests/mail.png";
const NewsLetter = () => {
  return (
    <div className="newsletter container-fluid">
      <div className="row hun ">
        <div className="col-md-6 para">
          <h2>Subscribe to our Newsletter</h2>
          <p>
            Get latest update lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here
          </p>
          <div className="formBtnews">
            <form class="d-flex">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter a valid email address"
              />
              <button class="btn btn-outline-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 space">
          <img src={mail} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
