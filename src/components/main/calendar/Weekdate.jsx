import { useRef, useState } from "react";
import moment from "moment"
import useDate from "../../../hooks/useDate";
import useWeak from "../../../hooks/useWeak"
import styled from "styled-components";

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Weekdate = () => {
  const now = new Date();
  const todayWeak = now.getDay();
  const today = now.getDate();
  const lastday = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();


  const CalendarDay = useDate(today, lastday, 7);
  const CalendarWeak = useWeak(todayWeak, 7);

  // 선택한 날짜 확인
  const [chk, setChk] = useState(today);
  // 배열로 오브젝트 형식으로 요일, 날짜 저장 
  const result = [];

  for (let i = 0; i < 7; i++) {
    result.push({ weak: CalendarWeak[i], day: CalendarDay[i] })
  }
  // 이전날로 선택 넘기기
  const onPrev = () =>{
    let index = CalendarDay.findIndex((i) => i===chk)
    if(index>0)
    {
      setChk(CalendarDay[index-1]);
    }
  }
  // 다음날로 선택 넘기기
  const onNext = () =>{
    let index = CalendarDay.findIndex((i) => i===chk)
    if(index<CalendarDay.length-1)
    {
      setChk(CalendarDay[index+1]);
    }
  }
  return (
    <Wrap style={{display:"flex", justifyContent:"center"}}>
      <div>
        <div style={{ display: "flex", justifyContent:"center", fontWeight:"bold" }}>
          <p>{moment(now).format("YYYY년")}</p>
          <p>{moment(now).format("MM월")}</p>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems:"center"}}>
            <IconP onClick={()=>{onPrev()}}>
              <ArrowBackIosNewRoundedIcon/>
            </IconP>
          </div>
          {result.map((calendar, index) => {
            return (
              <div key={index}>
                {chk === calendar.day ?
                  <DayDiv style={{ border: "1px solid black" }}
                  onClick={()=>{setChk(calendar.day)}}>
                    {calendar.weak === "일" ?                  
                      <div style={{ color: "red" }}>
                        {calendar.weak}
                      </div>
                    :
                      <div>
                        {calendar.weak}
                      </div>
                    }
                    <div>{calendar.day}</div>
                  </DayDiv>
                  : <DayDiv onClick={()=>{setChk(calendar.day)}}>
                    {calendar.weak === "일" ?
                      <div style={{ color: "red" }}>
                        {calendar.weak}
                      </div>
                    :
                      <div>
                        {calendar.weak}
                      </div>
                    }
                    <div>{calendar.day}</div>
                  </DayDiv>
                }
              </div>
            )
          })}
          <div style={{ display: "flex", alignItems:"center"}}>
            <IconP onClick={()=>{onNext()}}>
              <ArrowForwardIosRoundedIcon/>
            </IconP>
          </div>
        </div>
      </div>
    </Wrap>
  )
}

export default Weekdate;

const Wrap = styled.div`
  margin: 0 auto;
  /* background-color: dodgerblue; */
`

const DayDiv = styled.div`
width: 30%;
margin: 1.5vw;
padding: 10px;
border-radius: 20px;
cursor: pointer;
font-weight: bold;
text-align: center;
&:hover{
  color:white;
  background-color:black;
}
`

const IconP = styled.p`
/* background-color: black; */
color: black;
/* padding: 5px; */
border-radius: 50%;
cursor: pointer;
`