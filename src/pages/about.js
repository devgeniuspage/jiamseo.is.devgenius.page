import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>나는 누구인가? ~</h1>
          </div>
        </div>
        {/* - Title */}

        <div className="row my-4 justify-content-center">
          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>
                    안녕하세요!
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h2>
                  <h3>안녕하세요.</h3>
                </div>

                <div className="card-text">
                  중용 23장 <br/>
                  其次(기차)는 致曲 曲能有誠(치곡 곡능유성)이니<br/>
                  誠則形(성즉형)하고<br/>
                  形則著(형즉저)하고<br/>
                  著則明(저즉명)하고<br/>
                  明則動(명즉동)하고<br/>
                  動則變(동즉변)하고 變則化(변즉화)니<br/>
                  唯天下至誠(유천하지성)이아 爲能化(위능화)니라<br/>
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* + Image */}
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="about.jpg"
              alt="About page"
              className="about-img-wrapper"
            />
          </div>
          {/* - Image */}

          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>주변 사람들과 행복하게 살길 꿈꿉니다.</h2>
                  <h3>같이 행복해져요~</h3>
                </div>

                <div className="card-text">
                  컴퓨터 관련된 일을 하다 도움이 필요하면 같이 이야기 해봐요!
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}
        </div>
      </div>
    </section>
  </Layout>
)
export default AboutPage
