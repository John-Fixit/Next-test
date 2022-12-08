import { useRouter } from 'next/router'
function Fish() {
    let router = useRouter()
    const goToHome =()=>{
        router.back()
    }
  
  return (
    <div>fish
        <button type="" onClick={goToHome}>Take me Home</button>
    </div>
  )
}

export default Fish