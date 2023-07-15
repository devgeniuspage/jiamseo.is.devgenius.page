import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Links from "../components/links"
import contactimg from "../images/contactimg.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>연락처</h1>
            <p>
              안녕하세요. 방문해주셔서 감사합니다.
              저에게 궁금하신게 있다면 편하게 연락해주십시오.
              아래의 서비스로도 연락이 가능합니다.
            </p>
            <Links />
            <p>
              저는 현재 스타트업의 CTO업무를 담당하고 있습니다.
              이외에도 여러가지 업무가 가능합니다.
            </p>
            <ul>
              <li>제품 관리자(PM)</li>
              <li>소프트웨어 아키텍쳐</li>
              <li>소프트웨어 설계</li>
              <li>소프트웨어 개발</li>
              <li>클라우드 인프라 아키텍쳐(AWS, GCP, Azure, Naver, KT, NHN etc)</li>
              <li>NLP 개발</li>
              <li>데이터 분석</li>
              <li>소프트웨어 품질 관리</li>
            </ul>

            {/*<a*/}
            {/*  href="content"*/}
            {/*  className="main-button btn btn-primary shadow-sm mt-2"*/}
            {/*>*/}
            {/*  이력 다운로드*/}
            {/*</a>*/}
          </div>
          <div className="col-lg-4 my-auto">
            <div className="img-container">
              <img src={contactimg} alt="Vector of a man and a phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
