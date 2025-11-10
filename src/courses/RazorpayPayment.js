import { Box, Card, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import GooglePayIcon from "../images/google-wallet-holiday-snowglobe-anim.gif";
import PhonepeIcon from "../images/phonepe.gif";
import RazorpayIcon from "../images/razorpay.gif";
import { useNavigate } from "react-router-dom";

export default function RazorpayPayment({ personalDetailsData, selectCourse }) {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const [selectedUPI, setSelectedUPI] = useState(null);

  const handlePhonePePayment = () => {
    const upiId = "9689836751-2@ybl";
    const name = "Ujwalsing Shinde";
    const amount = 1;
    const note = "Payment for Counselling Plan";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      name
    )}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

    if (/Android|iPhone/i.test(navigator.userAgent)) {
      console.log("called");

      window.location.href = upiLink;
    } else {
      console.log("calleddddddddddddd");
      setSelectedUPI({
        name: "PhonePe",
        upiId,
        link: upiLink,
        icon: PhonepeIcon,
      });
      setShowQR(true);
    }
  };

  const handleGooglePayPayment = () => {
    const upiId = "shinde.ujwalsing10-1@okicici";
    const name = "Ujwalsing Shinde";
    const amount = 1;
    const note = "Payment for Counselling Plan";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      name
    )}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = upiLink;
    } else {
      setSelectedUPI({
        name: "Google Pay",
        upiId,
        link: upiLink,
        icon: GooglePayIcon,
      });
      setShowQR(true);
    }
  };

  const handleRazorpayPayment = async () => {
    if (
      !personalDetailsData.name ||
      !personalDetailsData.emailId ||
      !selectCourse
    ) {
      alert("Please fill all fields before proceeding!");
      return;
    }

    const options = {
      key: "rzp_test_RSdZLlFmNGvGcU",
      amount: personalDetailsData.amount * 100,
      currency: "INR",
      name: "HB Education Firm and Counselling",
      description: "Payment for Counselling Plan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Razorpay_logo.svg",
      handler: function (response) {
        console.log("Payment Successful:", response.razorpay_payment_id);
      },
      prefill: {
        name: personalDetailsData.name,
        email: personalDetailsData.emailId,
        contact: personalDetailsData.contactNo,
      },
      theme: { color: "#4fb7b3" },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          background: "linear-gradient(135deg, #f0faf9, #c8ece9)",
          padding: 2,
        }}
      >
        <Card
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 900,
            borderRadius: 3,
            boxShadow: 6,
            background: "#fff",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            mb={4}
            sx={{ color: "#333" }}
          >
            Choose Your Payment Method
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* PhonePe */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 3,
                  textAlign: "center",
                  padding: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 4, transform: "translateY(-5px)" },
                }}
              >
                <img
                  src={PhonepeIcon}
                  alt="PhonePe"
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px",
                  }}
                />
                <Typography mt={1} fontWeight={600}>
                  PhonePe
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#4fb7b3",
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                  onClick={handlePhonePePayment}
                >
                  Pay Now
                </Button>
              </Box>
            </Grid>

            {/* Google Pay */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 3,
                  textAlign: "center",
                  padding: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 4, transform: "translateY(-5px)" },
                }}
              >
                <img
                  src={GooglePayIcon}
                  alt="Google Pay"
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px",
                  }}
                />
                <Typography mt={1} fontWeight={600}>
                  Google Pay
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#4fb7b3",
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                  onClick={handleGooglePayPayment}
                >
                  Pay Now
                </Button>
              </Box>
            </Grid>

            {/* Razorpay */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 3,
                  textAlign: "center",
                  padding: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 4, transform: "translateY(-5px)" },
                }}
              >
                <img
                  src={RazorpayIcon}
                  alt="Razorpay"
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px",
                  }}
                />
                <Typography mt={1} fontWeight={600}>
                  Razorpay
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#4fb7b3",
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                  onClick={handleRazorpayPayment}
                >
                  Pay Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* QR Code Modal */}
      {showQR && selectedUPI && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowQR(false)}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              width: "300px",
            }}
          >
            {/* Animated Logo */}
            <img
              src={selectedUPI.icon}
              alt={selectedUPI.name}
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3>Scan to Pay with {selectedUPI.name}</h3>
            <QRCodeSVG value={selectedUPI.link} size={200} />
            <p style={{ marginTop: "10px" }}>UPI ID: {selectedUPI.upiId}</p>
          </div>
        </div>
      )}
    </>
  );
}
