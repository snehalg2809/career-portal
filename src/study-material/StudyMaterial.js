import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./StudyMaterial.css";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import NoteImg from "../images/notebook.gif"

export default function StudyMaterial() {
  return (
    <div className="study-container">
      <Nav />
      <div className="option-form-data">
        <div className="breadcrumbs-div">
          <BreadcrumbsNav />
        </div>
        <div className="study-data-card">
          <h1 className="study-heading">Study Material</h1>
          <div className="study-content">
            <div className="study-card">
                <div className="course-name"><img src={NoteImg} style={{ height: '50px', width:'50px',  }}></img><span>JEE Notes</span></div>
                <div className="course-description">All study material is available in below google drive link.</div>
                <a href="https://drive.google.com/drive/folders/1Mt4iHk3yG86nnq0pHJDlxUW17NBhojID" target="_blank">Click here to access data</a>
            </div>
            <div className="study-card">
                <div className="course-name"><img src={NoteImg} style={{ height: '50px', width:'50px',  }}></img><span>NEET Notes</span></div>
                <div className="course-description">All study material is available in below google drive link.</div>
                <a href="https://drive.google.com/drive/folders/1Mt4iHk3yG86nnq0pHJDlxUW17NBhojID" target="_blank">Click here to access data</a>
            </div>
            <div className="study-card">
                <div className="course-name"><img src={NoteImg} style={{ height: '50px', width:'50px',  }}></img><span>CET Notes</span></div>
                <div className="course-description">All study material is available in below google drive link.</div>
                <a href="https://drive.google.com/drive/folders/1Mt4iHk3yG86nnq0pHJDlxUW17NBhojID" target="_blank">Click here to access data</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
