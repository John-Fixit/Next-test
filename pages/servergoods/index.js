
function Index({goods}) {
  return (
    <div>
        {
            goods.map((good)=>{
                return (
                    <div key={good.id}>
                        <h1>{good.name}</h1>
                        <p>{good.price}</p>
                        </div>
                )
            })
        }
    </div>
  )
}

export default Index


export const getServerSideProps = async()=>{
    let response = await fetch('http://localhost:4000/')
    let data = await response.json()
    return {
        props: {
            goods: data
        }
    }
}