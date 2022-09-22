import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from 'react-router-dom';

const Option0 = ({head}) =>{
  const navigate = useNavigate();
  return (
    <>
    <div onClick={()=>{navigate(-1)}}>
        <p><ArrowBackIosNewRoundedIcon /></p>
    </div>
    <div style={{marginLeft:"1%"}}>
        <p>{head}</p>
      </div>
    </>
  )
}

export default Option0;