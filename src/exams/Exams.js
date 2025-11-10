import Footer from "../footer/Footer";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import Nav from "../nav/Nav";
import "./Exams.css";
import BookIcon from "../images/graduation-cap.gif";
export default function Exams() {
  const graduateTechnicalEducationCourses = [
    {
      course_name: "B.E/BTech",
      course_link: "https://fe2025.mahacet.org/StaticPages/HomePage",
    },
    {
      course_name: "BCA/MCA(Integrated",
      course_link: "https://bca2025.mahacet.org/StaticPages/HomePage",
    },
    {
      course_name: "BBA/BMS/BBM/MBA(Int.)",
      course_link: "https://bba2025.mahacet.org.in/bba/home",
    },
    {
      course_name: "B.Pharmacy/ Pharm D",
      course_link: "https://ph2025.mahacet.org/StaticPages/HomePage",
    },
    {
      course_name: "B.Architecture",
      course_link: "https://arch2025.mahacet.org.in/arch/home",
    },
    {
      course_name: "B.HMCT/M.HMCT(Integrated)",
      course_link: "https://dmhmct2025.mahacet.org.in/hmct/home",
    },
    {
      course_name: "Direct second Year Engineering(DSE)",
      course_link: "https://dse2025.mahacet.org.in/dse25/",
    },
    {
      course_name: "B.Planning",
      course_link: "https://bplanning2025.mahacet.org/StaticPages/HomePage",
    },
    {
      course_name: "B.Design",
      course_link: "https://bdesigncap2025.mahacet.org/StaticPages/HomePage",
    },
    {
      course_name: "Direct Second Year Degree in HMCT",
      course_link: "https://dmhmct2025.mahacet.org.in/cdhmct/home",
    },
    {
      course_name: "B.Pharmacy(Practice)",
      course_link: "https://phpractice2025.mahacet.org/StaticPages/HomePage",
    },
  ];

  const postgraduateHigherEducationCourses = [
    // {
    //   course_name: "NEET-PGM",
    // },
    {
      course_name: "M.Ed",
      course_link: "https://medcap25.mahacet.org/Public/Home.aspx",
    },
    // {
    //   course_name: "NEET-PGD",
    // },
    {
      course_name: "M.P.Ed",
      course_link: "https://mpedcap25.mahacet.org/Public/Home.aspx",
    },
    {
      course_name: "B.Ed.M.Ed INTEGRATED",
      course_link: "https://bedmedcap25.mahacet.org/Public/Home.aspx",
    },
  ];

  const graduateHigherEducationCourses = [
    {
      course_name: "L.L.B- 5Years (Integrated)",
      course_link: "https://llb5cap25.mahacet.org/Public/Home.aspx",
    },
    {
      course_name: "L.L.B- 3Years ",
      course_link: "https://llb3cap25.mahacet.org/Public/Home.aspx",
    },
    {
      course_name: "B.Ed",
      course_link: "https://bedcap25.mahacet.org/Public/Home",
    },
    {
      course_name: "B.P.Ed",
      course_link: "https://bpedcap25.mahacet.org/Public/Home.aspx",
    },
    {
      course_name: "B.A-B.Ed/B.Sc-B.Ed(Integrated)",
      course_link: "https://babscbedcap25.mahacet.org/Public/Home.aspx",
    },
  ];

  const postgraduateTechnicalCourses = [
    {
      course_name: "MBA/MMS",
      course_link:
        "https://mba2025.mahacet.org.in/cetmba25/mba25/index.php?show=home",
    },
    {
      course_name: "MCA",
      course_link: "https://mca2025.mahacet.org.in/mca/home",
    },
    {
      course_name: "M.E/M.Tech",
      course_link: "https://me2025.mahacet.org/StaticPages/HomePage",
    },
    {
      course_name: "M.E/M.Tech(Working Professionals",
      course_link: "https://mewp2025.mahacet.org/StaticPages/HomePage",
    },
    {
      course_name: "M. Architecture",
      course_link: "https://march2025.mahacet.org.in/march/home",
    },
    {
      course_name: "M.HMCT",
      course_link: "https://dmhmct2025.mahacet.org.in/mhmct/home",
    },
    {
      course_name: "M.Pharmacy/ Pharm D(Post Baccalaureate)",
      course_link: "https://mpharm2025.mahacet.org.in/mpharm/home",
    },
    {
      course_name: "MCA Second Year(Lateral Entry)",
      course_link: "https://mcale2025.mahacet.org.in/mcale/home",
    },
    {
      course_name: "MCA(Working Professionals)",
      course_link: "https://mcawp2025.mahacet.org.in/mcawp/home",
    },
    {
      course_name: "MBA Second Year(Lateral Entry)",
      course_link: "https://mbale2025.mahacet.org.in/mbale/home",
    },
    {
      course_name: "MBA/MMS (Working Professionals)",
      course_link: "https://mbawp2025.mahacet.org.in/mbawp/home",
    },
  ];

  const graduateMedicalEducationCourse = [
    {
      course_name: "B.Sc Nursing",
      course_link: "https://medicalug2025.mahacet.org/NURSING2025/login",
    },
    {
      course_name: "GNM",
      course_link: "https://medical2025.mahacet.org/GNM-2025/login",
    },
    {
      course_name: "DPN-PHN",
      course_link: "https://medical2025.mahacet.org/DPN-PHN-2025/login",
    },
    {
      course_name: "AIQ(15%) For Ayush Courses",
      course_link: "https://medicalug2025.mahacet.org/ALLINDIABAMS-2025/login",
    },
  ];

  const postgraduateMedicalEducationCourses = [
    {
      course_name: "PG DNB",
      course_link: "https://llb5cap25.mahacet.org/Public/Home.aspx",
    },
    {
      course_name: "PGP/PGO/PGASLP/M.Sc-(P&O)",
      course_link: "https://llb5cap25.mahacet.org/Public/Home.aspx",
    },
  ];

  const agricultureEducation = [
    {
      course_name: "Agriculture & alied Courses",
      course_link: "https://agri2025.mahacet.org/",
    },
    {
      course_name: "Direct Second Year of Bachelor of Science(Agriculture)",
      course_link: "https://agripug2025.mahacet.org/",
    },
  ];

  const fineArt = [
    {
      course_name: "Fine Art",
      course_link: "https://fineart2025.mahacet.org/FINEART2025/login",
    },
  ];

  const topCourses = [
    {
      course_name: "B.Tech",
    },
    {
      course_name: "Direct Second Year Engineering",
    },
    {
      course_name: "B.Pharmacy",
    },
    {
      course_name: "BBA",
    },
    {
      course_name: "BCA",
    },
    {
      course_name: "BCom",
    },
    {
      course_name: "BMS",
    },
  ];

  return (
    <div className="exam-container">
      <div>
        <Nav />
      </div>
      <div className="exam-data">
        {/* <img src={BackImg} alt="img"></img> */}
        <div
          className="breadcrumbs-div"
          style={{ zIndex: 2, position: "relative", padding: "1rem 1rem 0" }}
        >
          <BreadcrumbsNav />
        </div>
        <div className="exam-data-card">
          {/* <h1>Exams</h1> */}
          <div className="exam-data-wrapper">
            <h1>Top Courses</h1>
            <div className="exams-row">
              {topCourses.map((topCourse, index) => (
                <div
                  className="content-card float-in"
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={BookIcon}
                    style={{ height: "30px", width: "30px" }}
                    alt="Book"
                  />
                  <a
                    href={topCourse.course_link}
                    target="_blank"
                    rel="noreferrer"
                    className="course-link mt-3"
                  >
                    {topCourse.course_name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="exam-data-wrapper">
            <h2>Technical Education</h2>
            <div className="exams-row">
              <div className="exam-content">
                <h3>Under Graduation Courses</h3>
                <div className="two-column">
                  <div className="left-column">
                    {graduateTechnicalEducationCourses
                      .slice(
                        0,
                        Math.ceil(graduateTechnicalEducationCourses.length / 2)
                      )
                      .map((graduate, index) => (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                            alt="Book"
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            rel="noreferrer"
                            className="course-link mt-3"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      ))}
                  </div>

                  <div className="right-column">
                    {graduateTechnicalEducationCourses
                      .slice(
                        Math.ceil(graduateTechnicalEducationCourses.length / 2)
                      )
                      .map((graduate, index) => (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                            alt="Book"
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            rel="noreferrer"
                            className="course-link mt-3"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="exam-content">
                <h3>Post Graduation Courses </h3>
                <div className="two-column">
                  <div className="left-column">
                    {postgraduateTechnicalCourses
                      .slice(
                        0,
                        Math.ceil(postgraduateTechnicalCourses.length / 2)
                      )
                      .map((graduate, index) => {
                        return (
                          <div className="content-card" key={index}>
                            <img
                              src={BookIcon}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <a
                              href={graduate.course_link}
                              target="_blank"
                              className="course-link"
                            >
                              {graduate.course_name}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                  <div className="right-column">
                    {postgraduateTechnicalCourses
                      .slice(Math.ceil(postgraduateTechnicalCourses.length / 2))
                      .map((graduate, index) => {
                        return (
                          <div className="content-card" key={index}>
                            <img
                              src={BookIcon}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <a
                              href={graduate.course_link}
                              target="_blank"
                              className="course-link"
                            >
                              {graduate.course_name}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="exams-divider"></div>

          <div className="exam-data-wrapper">
            <h2>Higher Education</h2>
            <div className="exams-row">
              <div className="exam-content">
                <h3>Under Graduation Courses</h3>
                <div className="two-column">
                  <div className="left-column">
                    {graduateHigherEducationCourses
                      .slice(
                        0,
                        Math.ceil(graduateHigherEducationCourses.length / 2)
                      )
                      .map((graduate, index) => (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                            alt="Book"
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            rel="noreferrer"
                            className="course-link mt-3"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      ))}
                  </div>

                  <div className="right-column">
                    {graduateHigherEducationCourses
                      .slice(
                        Math.ceil(graduateHigherEducationCourses.length / 2)
                      )
                      .map((graduate, index) => (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                            alt="Book"
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            rel="noreferrer"
                            className="course-link mt-3"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="exam-content">
                <h3>Post Graduation Courses </h3>
                <div className="two-column">
                  <div className="left-column">
                    {postgraduateHigherEducationCourses
                      .slice(
                        0,
                        Math.ceil(postgraduateTechnicalCourses.length / 2)
                      )
                      .map((graduate, index) => {
                        return (
                          <div className="content-card" key={index}>
                            <img
                              src={BookIcon}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <a
                              href={graduate.course_link}
                              target="_blank"
                              className="course-link"
                            >
                              {graduate.course_name}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                  <div className="right-column">
                    {postgraduateHigherEducationCourses
                      .slice(Math.ceil(postgraduateTechnicalCourses.length / 2))
                      .map((graduate, index) => {
                        return (
                          <div className="content-card" key={index}>
                            <img
                              src={BookIcon}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <a
                              href={graduate.course_link}
                              target="_blank"
                              className="course-link"
                            >
                              {graduate.course_name}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exams-divider"></div>

          <div className="exam-data-wrapper">
            <h2>Medical Education</h2>
            <div className="exams-row">
              <div className="exam-content">
                <h3>Under Graduation Courses</h3>
                <div className="two-column">
                  <div className="left-column">
                    {graduateMedicalEducationCourse
                      .slice(
                        0,
                        Math.ceil(graduateMedicalEducationCourse.length / 2)
                      )
                      .map((graduate, index) => (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                            alt="Book"
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            rel="noreferrer"
                            className="course-link mt-3"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      ))}
                  </div>

                  <div className="right-column">
                    {graduateMedicalEducationCourse
                      .slice(
                        Math.ceil(graduateMedicalEducationCourse.length / 2)
                      )
                      .map((graduate, index) => (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                            alt="Book"
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            rel="noreferrer"
                            className="course-link mt-3"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="exam-content">
                <h3>Post Graduation Courses </h3>
                <div className="two-column">
                  <div className="left-column">
                    {postgraduateMedicalEducationCourses
                      .slice(
                        0,
                        Math.ceil(
                          postgraduateMedicalEducationCourses.length / 2
                        )
                      )
                      .map((graduate, index) => {
                        return (
                          <div className="content-card" key={index}>
                            <img
                              src={BookIcon}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <a
                              href={graduate.course_link}
                              target="_blank"
                              className="course-link"
                            >
                              {graduate.course_name}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                  <div className="right-column">
                    {postgraduateMedicalEducationCourses
                      .slice(
                        Math.ceil(
                          postgraduateMedicalEducationCourses.length / 2
                        )
                      )
                      .map((graduate, index) => {
                        return (
                          <div className="content-card" key={index}>
                            <img
                              src={BookIcon}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <a
                              href={graduate.course_link}
                              target="_blank"
                              className="course-link"
                            >
                              {graduate.course_name}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exams-divider"></div>

          <div className="exam-data-wrapper">
            <h2>Agriculture & Fine Education</h2>
            <div className="exams-row">
              <div className="exam-content">
                <h3>Agriculture Courses</h3>
                <div className="two-column">
                  <div className="left-column">
                    {agricultureEducation
                      .slice(
                        0,
                        Math.ceil(graduateMedicalEducationCourse.length / 2)
                      )
                      .map((graduate, index) => (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                            alt="Book"
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            rel="noreferrer"
                            className="course-link mt-3"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      ))}
                  </div>

                  <div className="right-column">
                    {/* {graduateMedicalEducationCourse
                    .slice(Math.ceil(graduateMedicalEducationCourse.length / 2))
                    .map((graduate, index) => (
                      <div className="content-card" key={index}>
                        <img
                          src={BookIcon}
                          style={{ height: "30px", width: "30px" }}
                          alt="Book"
                        />
                        <a
                          href={graduate.course_link}
                          target="_blank"
                          rel="noreferrer"
                          className="course-link mt-3"
                        >
                          {graduate.course_name}
                        </a>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>

              <div className="exam-content">
                <h3>Fine Art Courses </h3>
                <div className="two-column">
                  <div className="left-column">
                    {fineArt
                      .slice(
                        0,
                        Math.ceil(
                          postgraduateMedicalEducationCourses.length / 2
                        )
                      )
                      .map((graduate, index) => {
                        return (
                          <div className="content-card" key={index}>
                            <img
                              src={BookIcon}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <a
                              href={graduate.course_link}
                              target="_blank"
                              className="course-link"
                            >
                              {graduate.course_name}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                  <div className="right-column">
                    {/* {postgraduateMedicalEducationCourses
                    .slice(
                      Math.ceil(postgraduateMedicalEducationCourses.length / 2)
                    )
                    .map((graduate, index) => {
                      return (
                        <div className="content-card" key={index}>
                          <img
                            src={BookIcon}
                            style={{ height: "30px", width: "30px" }}
                          />
                          <a
                            href={graduate.course_link}
                            target="_blank"
                            className="course-link"
                          >
                            {graduate.course_name}
                          </a>
                        </div>
                      );
                    })} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
