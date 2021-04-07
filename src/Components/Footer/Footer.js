import moment from 'moment';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid p-0 footer">
      <div className="row m-0 p-0">
        <div className="col-lg-4 text-center py-2">
          <div className="col-md-10 col-xs-6 offset-xs-3">
            <img
              src="https://theleanprogrammer.com/assets/images/tlp_black.png"
              className="w-75 relative-center"
              alt="the lean programmer"
            />
          </div>
          <div className="col-md-10 offset-md-2 col-xs-6 offset-xs-3">
           {/* Follow Me:  */}
          </div>
          
        </div>
        {/* <div className="col-lg-4 text-center py-5">
          <h4>
          AAM Series
          </h4>
          
        </div> */}
        
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
