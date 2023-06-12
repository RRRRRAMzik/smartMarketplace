import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Adulam'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://get.wallhere.com/photo/planet-space-art-stars-space-colorful-dark-geometry-geometric-figures-1537491.jpg')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">NUMBER</h1>
          <span className="text-gradient text-5xl my-1">NFTs Collections</span>
          <p className="text-white font-semi-bold text-sm mt-3">
            Mint and rebuy the hottest NFTs
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
            onClick={onMintNFT}
          >
            Mint Now
          </button>
          <ul className="flex flex-row jistify-center space-x-2 items-center my-4">
            <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
               href="https://github.com/RRRRRAMzik">
              <img className="w-7 h-7" src={github} alt="Github"/>
            </a>
            <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
               href="https://github.com/RRRRRAMzik">
              <img className="w-7 h-7" src={facebook} alt="facebook"/>
            </a>
            <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
               href="https://github.com/RRRRRAMzik">
              <img className="w-7 h-7" src={linkedIn} alt="facebook"/>
            </a>
          </ul>
          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
