import moment from 'moment';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid p-0 footer">
      <div className="row m-0 p-0">
        <div className="col-lg-3 col-xs-12 text-center py-md-5 pt-3">
          <div className="col-12">
            <img
              src="https://i.ibb.co/GTNpRLL/tlp-black-1.png"
              className="w-75"
              alt="the lean programmer"
            />
          </div>
          <div className="col-12">
           <span> Follow Me:  </span>
           <img src="https://i.ibb.co/L1z8ddH/github-1.png" alt="github" className="social-media-icons relative-center" />
           <img src="https://i.ibb.co/2NZQ09g/029-instagram.png" alt="insta" className="social-media-icons relative-center" />
           <img src="https://i.ibb.co/9Z12dKY/027-linkedin.png" alt="linkedin" className="social-media-icons relative-center" />
           <img src="https://i.ibb.co/Q672bfz/001-youtube.png" alt="youtube" className="social-media-icons relative-center" />
          </div>
          
        </div>
        <div className="col-lg-6 col-xs-12 text-center py-md-5 pt-3">
          <h4 className="footer-headings">
          AAM Series
          </h4>
          <p className="text-style-2">
          Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          </p>
          <p className="text-style-2">
          Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          </p>
          <p className="text-style-2">
          Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          </p>
        </div>
        <div className="col-lg-3 col-xs-12 text-center py-md-5 pt-3">
          <h4 className="footer-headings">
          Special Thanks
          </h4>
          <p className="text-style-1">
          Smile Gupta - For Development
          </p>
          <p className="text-style-1">
          Hero Ninja - For Gradients
          </p>
          <p className="text-style-1">
          Converter - For UI Components
          </p>
        </div>
        
      </div>
      <div className="row m-0 p-0 copyright">
        <div className="col-12 text-center py-2 ">
            &copy; TheLeanProgrammer, {moment().format('YYYY')}
        </div>
      </div>
    </div>
  );
};

export default Footer;
