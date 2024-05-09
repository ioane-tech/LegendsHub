import styled from "styled-components";
import Header from "../header/Header";

const AboutContact: React.FC = () => {
  return (
    <>
      <Header />
      <AboutSection>
        <div className="about-title">
          <h1>პირველი ქართული League of legends-ის ლიგა!</h1>
        </div>

        <div className="about-text">
          <h1>
            Legendshub.ge არის პირველი ქართული League of legends-ის ლიგა,
            რომელიც მოიცავს 4 სეზონს და 4 დიდ ტურნირს.
          </h1>
          <h1>
            ეს არის ქართული ბაზრისთვის საკმაოდ ახალი და, რაღაც მხრივ, ინოვაციური
            პროექტი, რომლის წარმატებაზე საუბარიც ჯერ შეუძლებელია, უბრალოდ ჩვენ
            გვჯერა ამის.
          </h1>
          <h1>
            ამ პროექტში ჩართულია 10-მდე პირი სხვადასხვა ფუქნცია-მოვალეობებით.
            ვინმეს თუ აქვს დაინტერესება, რომ ჩვენს გუნდს შემოუერთდეს, მოგვწერეთ
            ჩვენს სოციალურ ქსელებში, ლინკები მითითებულია ქვევით.
          </h1>
          <h1>საკონტაქტო ინფორმაცია: n.makharadze@legendshub.ge</h1>
          <h1>
            ჩვენი პროექტის მიზანია, რაც შეიძლება მეტი ქართველი მოთამაშე და გუნდი
            გავიდეს საერთაშორისო ასპარეზზე და ჩვენი ლიგაც, შესაბამისად, გახდეს
            რეგიონალური.
          </h1>
        </div>
      </AboutSection>
    </>
  );
};

export default AboutContact;

const AboutSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${"/assets/mandilosani.jpg"});
  background-position: top center;
  background-size: cover;
  height: 100vh;
  padding-top: 170px;
  color: #fff;
  font-family: "BPG Nino Mtavruli", sans-serif;
  .about-title {
    text-align: center;
  }
  .about-text {
    border: 1px solid #fff;
    margin: 50px 120px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    gap: 50px;
  }
  @media (max-height: 900px) {
    height: 100vh;
  }
`;
