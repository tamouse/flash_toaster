import React from "react"
import styled from "styled-components"

function JunkFiller() {
  return (
    <Wrapper>
      <div>
        <h1>Nam vestibulum accumsan nisl</h1>
        <p>
          Etiam laoreet quam sed arcu. Sed diam. Aenean in sem ac leo mollis
          blandit. Aliquam posuere.
        </p>
        <p>
          Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.
          Fusce commodo. Nunc aliquet, augue nec adipiscing interdum, lacus
          tellus malesuada massa, quis varius mi purus non odio. Phasellus
          lacus. Nullam libero mauris, consequat quis, varius et, dictum id,
          arcu. Nunc porta vulputate tellus. Praesent fermentum tempor tellus.
          Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.
          Nulla posuere. Phasellus at dui in ligula mollis ultricies. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Aenean in sem ac leo mollis blandit. Nullam libero mauris,
          consequat quis, varius et, dictum id, arcu. Phasellus purus. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Nam euismod tellus id erat.
        </p>
        <ul>
          <li>Donec posuere augue in quam.</li>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>
            Pellentesque dapibus suscipit ligula. Donec posuere augue in quam.
            Etiam vel tortor sodales tellus ultricies commodo. Suspendisse
            potenti. Aenean in sem ac leo mollis blandit. Donec neque quam,
            dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam
            laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.
            Integer placerat tristique nisl. Praesent augue. Fusce commodo.
            Vestibulum convallis, lorem a tempus semper, dui dui euismod elit,
            vitae placerat urna tortor vitae lacus. Nullam libero mauris,
            consequat quis, varius et, dictum id, arcu. Mauris mollis tincidunt
            felis. Aliquam feugiat tellus ut neque. Nulla facilisis, risus a
            rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo
            sit amet elit.
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default JunkFiller

const Wrapper = styled.div`
  width: 95%;
  @media screen and (min-width: 786px) {
    max-width: 80%;
  }
  margin: auto;
  padding: 0.5em;
  background-color: #eee;
  color: #aaa;
`
