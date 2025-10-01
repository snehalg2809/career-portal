import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Summary.css"; // ✅ External CSS

function SortableRow({ row, index }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: row.SrNo });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : "auto",
    boxShadow: isDragging
      ? "0 12px 32px rgba(0,0,0,0.25)"
      : "0 4px 10px rgba(0,0,0,0.08)",
    background: isDragging ? "#e0f2fe" : "#f8fafc",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "8px",
    cursor: "grab",
    transformOrigin: "center",
    // scale effect when dragging
    ...(isDragging && {
      transform: `${CSS.Transform.toString(transform)} scale(1.05)`,
    }),
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`draggable-row ${index % 2 === 0 ? "even" : "odd"}`}
    >
      <td>{row.SrNo}</td>
      <td>{row.Merit}</td>
      <td>{row.ChoiceCode}</td>
      <td>{row.InstituteName}</td>
      <td>{row.CourseName}</td>
      <td>{row.MeritExam}</td>
    </tr>
  );
}

export default function Summary() {
  // 🟢 Sample Data
  const [rows, setRows] = useState([
    {
      SrNo: "1051",
      Merit: "25732 (78.02)",
      ChoiceCode: "0517224510",
      InstituteName: "R. C. Patel Institute of Technology, Shirpur",
      CourseName: "Computer Engineering",
      MeritExam: "JEE",
    },
    {
      SrNo: "1052",
      Merit: "33859 (71.57)",
      ChoiceCode: "0517399510",
      InstituteName:
        "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
      CourseName: "Artificial Intelligence and Data Science",
      MeritExam: "JEE",
    },
    {
      SrNo: "1053",
      Merit: "32565 (72.64)",
      ChoiceCode: "0517324510",
      InstituteName:
        "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
      CourseName: "Computer Engineering",
      MeritExam: "JEE",
    },
    {
      SrNo: "1054",
      Merit: "46124 (62.39)",
      ChoiceCode: "0517361210",
      InstituteName:
        "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
      CourseName: "Mechanical Engineering",
      MeritExam: "JEE",
    },
    {
      SrNo: "1055",
      Merit: "37607 (68.84)",
      ChoiceCode: "0517337210",
      InstituteName:
        "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
      CourseName: "Electronics and Telecommunication Engg",
      MeritExam: "JEE",
    },
    {
      SrNo: "1056",
      Merit: "49304 (59.86)",
      ChoiceCode: "0517319110",
      InstituteName:
        "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Chandwad, Nashik",
      CourseName: "Civil Engineering",
      MeritExam: "JEE",
    },
    {
      SrNo: "1057",
      Merit: "50521 (59.06)",
      ChoiceCode: "0517724610",
      InstituteName:
        "Matoshri College of Engineering and Research Centre, Nashik",
      CourseName: "Information Technology",
      MeritExam: "JEE",
    },
    {
      SrNo: "1058",
      Merit: "51853 (58.04)",
      ChoiceCode: "0517799510",
      InstituteName:
        "Matoshri College of Engineering and Research Centre, Nashik",
      CourseName: "Artificial Intelligence and Data Science",
      MeritExam: "JEE",
    },
    {
      SrNo: "1059",
      Merit: "56061 (54.81)",
      ChoiceCode: "0517737210",
      InstituteName:
        "Matoshri College of Engineering and Research Centre, Nashik",
      CourseName: "Electronics and Telecommunication Engg",
      MeritExam: "JEE",
    },
    {
      SrNo: "1060",
      Merit: "47747 (61.06)",
      ChoiceCode: "0517724510",
      InstituteName:
        "Matoshri College of Engineering and Research Centre, Nashik",
      CourseName: "Computer Engineering",
      MeritExam: "JEE",
    },
    {
      SrNo: "1061",
      Merit: "47747 (61.06)",
      ChoiceCode: "0517724510",
      InstituteName:
        "Matoshri College of Engineering and Research Centre, Nashik",
      CourseName: "Computer Engineering",
      MeritExam: "JEE",
    },
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = rows.findIndex((r) => r.SrNo === active.id);
      const newIndex = rows.findIndex((r) => r.SrNo === over.id);
      setRows((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF("l", "pt", "a4");
    doc.setFontSize(15);
    doc.text("College Preference List", 40, 30);

    autoTable(doc, {
      head: [
        [
          "Sr No",
          "Merit",
          "Choice Code",
          "Institute Name",
          "Course Name",
          "Merit Exam",
        ],
      ],
      body: rows.map((r) => [
        r.SrNo,
        r.Merit,
        r.ChoiceCode,
        r.InstituteName,
        r.CourseName,
        r.MeritExam,
      ]),
      startY: 50,
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: {
        fillColor: [44, 62, 80],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    doc.save("CollegeList.pdf");
  };

  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>🎓 College Preference List</h2>
        <FontAwesomeIcon
          icon={faFileExport}
          onClick={downloadPDF}
          className="download-icon"
          title="Download PDF"
        />
      </div>

      <div className="table-wrapper">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={rows.map((r) => r.SrNo)}
            strategy={verticalListSortingStrategy}
          >
            <table className="preference-table">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Merit</th>
                  <th>Choice Code</th>
                  <th>Institute Name</th>
                  <th>Course Name</th>
                  <th>Merit Exam</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <SortableRow key={row.SrNo} row={row} index={i} />
                ))}
              </tbody>
            </table>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
