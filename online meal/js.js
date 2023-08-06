console.log("This is date and time tutorial");
        let now=new Date();
        console.log(now);

        //let tim=new Date(1000);
        //console.log(tim);

        // let ti=new Date("2056-11-22");
        // console.log(ti);

        // let newate= new date(year, month, date, minutes, seconds, milliseconds);
        let newDate= new Date(5026,4,6,5,51,8);
        console.log(newDate);
        // let t=new Date("2056-11-22");
        // console.log(t);

        let yr = newDate.getFullYear();
        console.log("This year is ", yr);

        let dt = newDate.getDate();
        console.log("This date is ", dt);

        let month= newDate.getMonth();
        console.log("This month is ", month);

        let hours = newDate.getHours();
        console.log("This hours is ",hours );

        setInterval(updateTime,1000);
        function updateTime(){
            time.innerHTML=new Date();
        }