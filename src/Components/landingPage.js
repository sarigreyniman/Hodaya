import React, { useEffect, useState } from 'react';
import { Button, Dialog, Typography, useMediaQuery } from "@mui/material";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import '../style.css';
import '../background.png';
import '../ring.jpg';

const LandingPage = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:1024px)');

    useEffect(() => {
        const timer = setTimeout(() => {
            handleOpenVideo();
        }, 1000); // או כל פרק זמן אחר שתרצה במילישניות
        return () => clearTimeout(timer);
    }, []); // השארתי את התנאי ריק כדי שהטיימר יפעל רק פעם אחת ברגע שהדף מתקשר

    const handleOpenDialog = () => {
        setShowVideo(false);
        setOpenDialog(true);
    };

    const handleOpenVideo = () => {
        setShowVideo(true);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleButtonClick = () => {
        window.location.href = 'https://www.kupat.org/views/DonationPage?pid=1297&recid=0';
    };

    return (
        <>
            <div className='divImg' ></div>

            <div className='title'>
                <Typography style={{ fontSize: isMobile ? '4vh' : isTablet ? '5vh' : '6vh', marginBottom: isMobile ? '5vh' : isTablet ? '8vh' : '10vh', backgroundColor: 'rgba(255,255,255,0.5)', fontFamily: 'Lucida Handwriting', borderRadius: '10vh', textShadow: '1px 1px 2px rgb(44,130,105)', boxShadow: '0vh 0vh 15vh 10vh rgba(255,255,255,0.668)', backdropFilter: 'blur(2px)' }}>
                    ,אנחנו סופרים את העומר
                    ...הודיה סופרת הגומר
                </Typography>
                <Typography style={{ fontSize: isMobile ? '5vh' : isTablet ? '7vh' : '10vh', color: 'rgb(212, 137, 141)', fontFamily: 'Monotype Corsiva', backdropFilter: 'blur(2px)', borderRadius: '20vh', textShadow: '1px 1px 2px rgb(44,130,105)', marginTop: isMobile || isTablet ? '11vh' : '0' }}>
                    <b> ! זה בידיים <span style={{ fontSize: isMobile ? '6vh' : isTablet ? '8vh' : '10.5vh' }}>שלנו </span>  לעזור לזה לקרות</b>
                </Typography>
            </div>
            <div className='divs'>
                <Button className='div' sx={{
                    color: 'black',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    backgroundColor: '#cbd3a9',
                    fontSize: isMobile || isTablet ? '2vh' : '3vh',
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                    '&:hover': {
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        backgroundColor: '#cbd3a9',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                }} onClick={handleOpenVideo}>
                    <SmartDisplayIcon style={{ height: isMobile || isTablet ? '7vh' : '10vh', fontSize: isMobile || isTablet ? '5vh' : '5vh', marginRight: isMobile || isTablet ? '1vw' : '14vw' }} />
                </Button>
                <Button className='div' style={{ backgroundColor: '#cbd3a9', }} onClick={handleButtonClick} sx={{
                    color: 'black',
                    backgroundColor: '#cbd3a9',
                    boxShadow: 'none',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    fontSize: isMobile || isTablet ? '2vh' : '3vh',
                    '&:hover': {
                        backgroundColor: '#cbd3a9',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                }}>
                    אני רוצה לתרום
                </Button>
                <Button className='div' style={{ textAlign: 'center' }} sx={{
                    color: 'black',
                    boxShadow: 'none',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    backgroundColor: '#cbd3a9',
                    fontSize: isMobile || isTablet ? '2vh' : '3vh',
                    '&:hover': {
                        backgroundColor: '#cbd3a9',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                }} onClick={handleOpenDialog}>
                    לקרוא אודות זה
                </Button>
            </div>

            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="xl">
                <Button onClick={handleCloseDialog} sx={{
                    fontSize: '2vh', marginLeft: isMobile || isTablet ? '70vw' : '90.5vw', color: 'white', backgroundColor: 'red', '&:hover': {
                        backgroundColor: 'red'
                    }
                }}><b>X</b></Button>
                {showVideo ? (
                    <iframe
                        title="video-preview"
                        src="https://drive.google.com/file/d/1q_HfgREHW5B2F83M_Lq4w4voaIi1TkgN/preview"
                        style={{ width: '100%', maxWidth: '800px', marginLeft: isMobile || isTablet ? '0vw' : '20vw' }}
                        width="100%"
                        height={isMobile ? "200px" : "400px"}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <Typography variant="body1" sx={{textAlign:'right', fontSize: isMobile || isTablet ? '2.2vh' : '2.8vh', lineHeight: '1.7', fontFamily: 'Yu Gothic Medium', marginRight: isMobile || isTablet ? '1vw' : '15vw' }}><i>
                        טלטלת חיים עד החופה <br></br>
                        הכנסת כלה יתומה מהמקרים הקשים ביותר<br></br>
                        <b>הודיה ארמא בחורה בת 23 יתומה מאמא כבר 13 שנה בהיותה הבת הגדולה בבית<br></br>
                            כבר מילדות ממש נפל עליה כל עול הבית היא זו שטיפלה באחיה הקטנים היא זו<br></br>
                            שבשלה היא זו שכבסה והיא הילדה הקטנה הייתה העקרת בית, כאשר בסופו של דבר<br></br>
                            היא זו שגם טיפלה באביה שהוא חולה ראות כרוני ולא יכל לתפקד אפי&#39; לא כאב, עד<br></br>
                            שכיום עם כל מאמציה של הודיה כנערה צעירה להחזיק את הבית, הודיה מאומצת<br></br>
                            במשפחה </b><br></br>
                        <div className='ring'></div>
                        בעיר לוד ליד הערבים גרה משפחה בבית קטן בשכירות כאשר ילדי המשפחה אינם מהנוף הטבעי<br></br>
                        של אנשי המקום ילדים טהורים הגדלים ומקבלים חינוך חרדי אמיתי ואפי&#39; חסידי ע&#39;&#39;י ההורים האמא<br></br>
                        אשה גדולה שהגדירו אותה כלביאה ממש בדאגה לחינוך ילדיה האב יהודי אמיתי עובד ה&#39; בתורה<br></br>
                        ויר&#39;&#39;ש כבר אז מצבה הכלכלי של המשפחה היה זקוק לעזרה ואנשי המקום מהקהילה הקטנה<br></br>
                        שהייתה שם אנשים טובים תמכו בהם<br></br>
                        לפני כ15 שנה חלתה האמא במחלה הנוראה ושנתיים של ייסורים נוראים הכריעו אותה והיא נפטרה<br></br>
                        והשאירה את בעלה וארבעה יתומים קטנים שהגדולה שבהם היא הודיה, (בנוסף לשני בנות נוספות<br></br>
                        גדולות יותר של האם מנישואים קודמים שגם גרו איתם בבית עד לפטירת האם)<br></br>
                        האב גם הוא אדם לא בריא כלל חולה במחלת ריאות כרונית וסכרת כאשר תקופות ארוכות היה<br></br>
                        מחובר לחמצן<br></br>
                        מגיל 10 הודיה מנהלת את הבית מכינה שבתות לבד ודואגת לאחיה הקטנים מכבסת מבשלת כאשר<br></br>
                        כמעט כל עול הבית עומד עליה<br></br>
                        עד שלפני כמה שנים האבא שהוא חולה ריאות במצב כרוני התמוטט למול עיני האח הקטן הוא<br></br>
                        הובהל במהירות לבית החולים, חודש שכב האב בלי הכרה בבית החולים שכל הילדים נמצאים אצל<br></br>
                        משפחות טובות שהסכימו לארח אותם<br></br>
                        הודיה המשיכה לתמוך בכל המשפחה גם כשאביה החולה חזר הביתה והיה צריך לטפל גם בו מעבר<br></br>
                        לכל המשפחה והילדים<br></br>
                        אלא שלאחר כמה שנים שוב התמוטט האב ואיבד את הכרתו לכמה חודשים כאשר הודיה שהייתה<br></br>
                        כבר מעל גיל 18 היא זו שמתמנית ע&#39;&#39;י בית המשפט להיות אפוטרופוס עליו וכל הטיפול הרפואי מוטל<br></br>
                        עליה הודיה אינה מפספסת אף יום בביה&#39;&#39;ח היא מגיעה כל יום ומתוכחת עם הרופאים שכבר עמדו<br></br>
                        נואש להציל את חיו של האב יחד עם זאת מתמודדת הודיה להחזיק את הבית שצריך טפול בפני<br></br>
                        עצמו<br></br>
                        והכל הכל מוטל על שכמה של נערה צעירה יתומה שצריכה לטפל בכל המשפחה ובאב חולה במצב<br></br>
                        קשה מאוד<br></br>
                        הודיה לא אמרה נואש ובזכותה אביה ממש חזר לחיים לאחר טיפול של שנה בביה&#39;&#39;ח כאשר בתוך כך<br></br>
                        נקראו בני המשפחה פעמיים לאמירת וידוי ליד מיטת האב החולה על ערש דווי ובחסדי ה&#39; יתברך<br></br>
                        האב חזר לחיים<br></br>
                        <br></br>
                        אך מצבו אינו כבתחילה הוא אינון מסוגל לתפקד פיזית ובלית ברירה הוחלט להכניסו לבית אבות<br></br>
                        שיוכל לחיות במצבו ולקבל את הטיפול הסיעודי לו הוא נצרך<br></br>
                        בלית ברירה עקב השכר הגדול שבו נדרשו לשלם עבור השהות בבית אבות פינו את הדירה השכורה<br></br>
                        בבני ברק ושאר הילדים חולקו כל אחד למקום בו יהיה אפשר לו לגדול בצורה הטובה ביותר<br></br>
                        הודיה שגם כך הייתה קרובה בקשר אדוק עם המנהלת של התיכון הסכימה לאחר הפצרות לבוא<br></br>
                        ולהתגורר בביתה כשהמנהלת משתדלת לתת לה את כל צרכיה כולל את המענה הרגשי, הודיה<br></br>
                        משתלבת בבית המנהלת כאחת מבנותיה ממש<br></br>
                        לאחר פרק ארוך של שידוכים עולים ויורדים הודיה מוצאת את בן זוגה בחור יר&#39;&#39;ש בעל מידות ות&#39;&#39;ח<br></br>
                        בישיבה בין המחותנים מתחייבת משפחת המנהלת להשתדל לעזור לכלה לגייס סכום של 250000<br></br>
                        ש&#39;&#39;ח וזה לא כולל את ההוצאות הפשוטות של צרכי החתונה עם כל המשתמע להוציא כלה מהבית<br></br>
                        ולחתן אותה כמתבקש כאשר אין אפי&#39; את המחשבה מהיכן להתחיל כשלאב אין כלום פשוטו כמשמעו<br></br>
                        וגם לחלק מהתשלום לבית אבות נצרך הוא לשלם מכספי צדקה<br></br>
                        אין ספק כי מדובר בהכנסת כלה מהמקרים הקשים והחמורים ביותר שאין מהיכן לשלם אפי&#39; את<br></br>
                        הדברים המינימליים<br></br>
                        למותר לציין שגם עד כה כל צרכיה היו מכספי צדקה שכעת הצורך להכניסה תחת החופה מחייב גיוס<br></br>
                        של סכומים גדולים מאוד שא&#39;&#39;א להשיג ללא פניה לציבור ולתומכי הצדקה<br></br>
                        יש לציין כי משפחת המנהלת המאמצת את הודיה, בשש שנים האחרונות עברו תקופות לא פשוטות<br></br>
                        כאשר גם האב וגם האם היו חולים במחלה הנוראה ועברו טיפולים לא פשוטים עד כדי שלצורך<br></br>
                        הטיפול באם הוצרכו לינסוע לחו&#39;&#39;ל לארה&#39;&#39;ב כאשר באחת הנסיעות הצטרפה גם הודיה כחלק<br></br>
                        מהמשפחה<br></br>
                        למותר לציין כי אין באפשרות המשפחה לממן את הסכומים הנ&#39;&#39;ל שגם בלא ההוצאות הרפואיות רובץ<br></br>
                        עליהם חובות גדולים בין היתר מהנשואים של חלק מהילדים<br></br>
                        לכן אנו פונים אליכם אנא שאו בעול של ילדה יתומה ועזרו לה להנשא בכבוד ותקיימו מצות הכנסת<br></br>
                        כלה בהידור רב<br></br>
                        <b style={{fontSize:'3vh'}}>אנא תן ליבך לעזור לילדה היתומה להיכנס תחת החופה בשמחה</b> </i>
                    </Typography>
                )}
                <Button style={{ backgroundColor: '#cbd3a9', }} onClick={handleButtonClick} sx={{
                    color: 'black',
                    backgroundColor: '#cbd3a9',
                    boxShadow: 'none',
                    marginLeft: '35vw',
                    marginBottom: '4vh',
                    marginTop: '2vh',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    fontSize: isMobile || isTablet ? '1.5vh' : '3vh',
                    '&:hover': {
                        backgroundColor: '#cbd3a9',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                }}>
                    אני רוצה לתרום
                </Button>
            </Dialog >
        </>
    );
}
export default LandingPage;