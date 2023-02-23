import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(98.95deg, #302451 -0.83%, #4b3b76 97.71%);
  border-bottom: ${(props) =>
    props.borderBottom ? "10px solid #956fff" : "none"};
  padding: ${(props) => (props.playerPage ? "0px" : "10px 0px")};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: ${(props) => (props.playerPage ? "20px" : "10px 20px")};

  div.logoContain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    cursor: pointer;
    h2 {
      font-size: 20px;

      span {
        color: #ff003d;
      }
    }

    span.nomeDoCurso {
      color: grey;
      padding-left: 10px;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 700px;
    }
  }

  div.loginSigninbtnsContainer {
    .outBtn {
      cursor: pointer;
    }
    span {
      cursor: pointer;
      color: white;
      padding: 10px;
    }
    span.register {
      background-color: #735db0;
      border-radius: 20px;
      padding: 10px 20px;
    }
  }
`;

export const UserProfileDropDow = styled.div`
  img.userprofile {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 4px solid #58468a;
    cursor: pointer;
  }

  div.listMenu {
    display: ${(props) => (props.showMenu ? "block" : "none")};
    width: 250px;
    background-color: #fff;
    border: 0.5px solid grey;
    position: absolute;
    right: 0;
    margin: 0px 10px;
    border-radius: 5px;

    div.userdetails {
      display: flex;
      align-items: center;
      border-bottom: 1px solid grey;
      padding: 10px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        border: 2px solid #58468a;
      }

      div.userdetails_data {
        display: flex;
        padding-left: 10px;
        flex-direction: column;

        h3 {
          color: black;
        }

        span.userEmail {
          padding: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          max-width: 150px;
          font-size: 13px;
          color: grey;
        }
      }
    }

    ul {
      padding: 10px;
      border-bottom: 1px solid grey;
      li {
        list-style: none;

        span {
          color: grey;
          &:hover {
            color: #956fff;
          }
        }
      }
    }
  }
`;
