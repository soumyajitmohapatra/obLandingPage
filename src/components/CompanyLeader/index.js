import React from "react"
import styled from "styled-components"

function index() {
  return (
    <Section>
      <div className="card active">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <h4>Er Mahabir Biswal</h4>
        <small>Founder and Chairman</small>
        <button>
          <a href="mailto:mahabirbiswal1234@gmail.com">Connect</a>
        </button>
      </div>
      <div className="card active">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <h4>Ramkinkar Mishara</h4>
        <small>CEO</small>
        <button>
          <a href="mailto:rakimishra1@gmail.com">Connect</a>
        </button>
      </div>
    </Section>
  )
}

export default index

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 140px 0px 140px;
  color: #1b1b1b;
  a {
    text-decoration: none;
    color: #fff;
  }
  @media all and (max-width: 500px) {
    flex-direction: column;
    padding: 0px;
  }
  .card {
    background-color: #fff;
    border-radius: 3px;
    padding: 30px;
    margin: 10px;
    text-align: center;
    width: 220px;
    max-width: 100%;
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
    position: relative;
    top: -3rem;
    margin-bottom: 5rem;
    img {
      border-radius: 50%;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      width: 75px;
    }
  }
  .card.active {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.3);
  }

  .card h4 {
    margin: 10px 0;
  }

  .card small {
    color: #777;
    display: block;
  }

  .card button {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #999;
    padding: 10px 25px;
    margin-top: 25px;
  }

  .card.active button {
    background-color: #748dff;
    border: 0;
    box-shadow: 0px 2px 5px rgba(116, 141, 255, 0.7);
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    .cards {
      flex-wrap: wrap;
    }

    .card.active {
      /* 		transform: scale(1); */
    }
  }
`
