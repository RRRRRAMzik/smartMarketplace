import ethlogo from '../assets/ethlogo.png'

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          About us
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Projects
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Team
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Contact us
        </p>
      </div>

      <div className="flex flex-row justify-center items-center mt-2">
        <img src={ethlogo} alt="logo" className="w-8" />
        <span className="text-white text-xs">
          Smart QUIC © 2023
        </span>
      </div>
    </div>
  </div>
)

export default Footer