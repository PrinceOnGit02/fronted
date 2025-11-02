import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/image/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />
            <p>&copy; 2010 - 2024 Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" style={{ textDecoration: "none" }}>
              About
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Products
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Pricing
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Referral Program
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Careers
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Press & media
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" style={{ textDecoration: "none" }}>
              Contact
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Support portal
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              List of charge
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Download & resources
            </a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" style={{ textDecoration: "none" }}>
              Open an account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Fund transfer
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              60 Days challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL: Depository services through Zerodha Broking
            Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            For any complaints pertaining to securities broking, please write to
            <a
              href="mailto:complaints@zerodha.com"
              class="text-blue-600 hover:underline"
            >
              complaints@zerodha.com
            </a>
            . For DP-related queries, write to
            <a
              href="mailto:dp@zerodha.com"
              class="text-blue-600 hover:underline"
            >
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF.
          </p>

          <p>
            <strong>Procedure to file a complaint on SEBI SCORES:</strong>
            Register on the SCORES portal. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, and Email
            ID.
            <br />
            Benefits: Effective Communication, Speedy Redressal of Grievances.
          </p>

          <p>
            Investments in the securities market are subject to market risks;
            read all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from the Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors."
          </p>

          <p>
            "KYC is one-time exercise while dealing in securities markets – once
            KYC is done through a SEBI registered intermediary (broker, DP,
            Mutual Fund etc.), you need not undergo the same process again when
            you approach another intermediary."
          </p>

          <p>
            Dear Investor, in case you are subscribing to an IPO, there is no
            need to issue a cheque. Please write the bank account number and
            sign the IPO application form to authorize your bank to make payment
            in case of allotment. In case of non-allotment, the funds will
            remain in your bank account.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
