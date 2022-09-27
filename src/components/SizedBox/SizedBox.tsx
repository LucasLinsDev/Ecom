
interface SizedBoxProps{
height:number
}

export function SizedBox({height}:SizedBoxProps){
  return(
    <div style={{width:'100%', height:height}}></div>
  )
}