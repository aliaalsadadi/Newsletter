import React from "react";
import Image from "next/image";

const Layout = ({ data }) => {
  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="flex-1">
      <>
        <div style={{ fontFamily: "minion-pro, Georgia, serif" }}>
          <div
            id="m_8569752246846200557x_preview-text"
            style={{
              fontSize: 18,
              lineHeight: "1.5em",
              fontFamily: "minion-pro, Georgia, serif",
              color: "#111111",
            }}
          >
            <span
              style={{
                fontFamily: "minion-pro, Georgia, serif",
                display: "none",
                maxHeight: 0,
                overflow: "hidden",
              }}
            >
              3 Keys, 2 quotes, and 1 question to consider this week.{" "}
            </span>
            <span
              style={{
                fontFamily: "minion-pro, Georgia, serif",
                display: "none",
                maxHeight: 0,
                overflow: "hidden",
              }}
            >
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
              <wbr />
              &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
            </span>
          </div>
          <div
            style={{
              fontSize: 18,
              lineHeight: "1.5em",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "#111111",
              maxWidth: 600,
              margin: "30px auto",
            }}
          >
            <div
              style={{
                fontSize: 18,
                lineHeight: "1.5em",
                fontFamily: "minion-pro, Georgia, serif",
                color: "#111111",
                paddingBottom: 10,
                background: "#f9f8f4",
                padding: "32px 20px",
                marginBottom: 40,
                textAlign: "center",
              }}
            >
              <Image
                width={370}
                height={42}
                style={{
                  fontFamily: "minion-pro, Georgia, serif",
                  maxWidth: "100%",
                  height: "auto",
                  margin: "0 auto",
                }}
                src="https://i.postimg.cc/MH8ZvP5N/capitalist-key.jpg"
                className="CToWUd"
                data-bit="iit"
                alt="key"
              />
              <div
                style={{
                  fontSize: 19,
                  lineHeight: "1.5em",
                  fontFamily: "minion-pro, Georgia, serif",
                  color: "#111111",
                  fontStyle: "italic",
                  margin: "20px auto 0",
                  maxWidth: 300,
                  paddingBottom: 10,
                }}
              >
                “The most wisdom per word of any newsletter on the web.”
              </div>
            </div>
            <table
              cellPadding={0}
              cellSpacing={0}
              style={{
                fontFamily: "minion-pro, Georgia, serif",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <tbody style={{ fontFamily: "minion-pro, Georgia, serif" }}>
                <tr style={{ fontFamily: "minion-pro, Georgia, serif" }}>
                  <td style={{ fontFamily: "minion-pro, Georgia, serif" }}>
                    <h1
                      style={{
                        fontFamily: "europa, Helvetica, Arial, sans-serif",
                        color: "#111",
                        lineHeight: "1.2",
                        fontSize: 32,
                      }}
                    >
                      Capitalist Keys: {renderWithLineBreaks(data.title)}
                    </h1>
                    <div
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        paddingBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "minion-pro, Georgia, serif",
                          color: "#999",
                          fontSize: 12,
                          margin: "0 10px",
                        }}
                      >
                        |
                      </span>
                      <span
                        style={{
                          fontFamily: "europa, Helvetica, Arial, sans-serif",
                          fontSize: 12,
                          fontWeight: "bold",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        March 7, 2024
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      Happy Capitalist Keys Thursday!
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      And now, here are 3 keys, 2 quotes, and 1 question to
                      consider this week...
                    </p>
                    <table
                      width="100%"
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      style={{
                        fontFamily: "minion-pro, Georgia, serif",
                        textAlign: "center",
                        tableLayout: "fixed",
                        float: "none",
                      }}
                    >
                      <tbody
                        style={{ fontFamily: "minion-pro, Georgia, serif" }}
                      >
                        <tr
                          style={{ fontFamily: "minion-pro, Georgia, serif" }}
                        >
                          <td
                            align="center"
                            style={{ fontFamily: "minion-pro, Georgia, serif" }}
                          >
                            <div
                              style={{
                                fontSize: 18,
                                lineHeight: "1.5em",
                                fontFamily: "minion-pro, Georgia, serif",
                                color: "#111111",
                                paddingBottom: 10,
                                display: "block",
                              }}
                            >
                              <img
                                width={800}
                                height="auto"
                                style={{
                                  fontFamily: "minion-pro, Georgia, serif",
                                  maxWidth: "100%",
                                  height: "auto",
                                  margin: "0 auto",
                                  borderRadius: "4px 4px 4px 4px",
                                  width: 800,
                                  objectFit: "contain",
                                }}
                                src="https://ci3.googleusercontent.com/meips/ADKq_Na1w__ROkoL4Ijhc1R1rT2oEdZJH-evtVlirQoGBvEpVTzC3W8GkdSyLWoTcOVJiLKaImLdFol9spzud7p5WU2A2caSHtkuZc_SkYJITtg3odUi17BHWqm_Sm_MI8hK4HHUjXKYN68L=s0-d-e1-ft#https://embed.filekitcdn.com/e/v8SpEtu13mmJwEXTaaGcqH/8jQzskcd5tCNEFz9T4XTnA/email"
                                className="CToWUd"
                                data-bit="iit"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        paddingBottom: 10,
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "europa, Helvetica, Arial, sans-serif",
                          color: "#111",
                          lineHeight: "1.2",
                          fontSize: 24,
                        }}
                      >
                        3 Keys From Me
                      </h2>
                    </div>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      I.
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                      id="idea1"
                    >
                      {renderWithLineBreaks(data.idea1)}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    />
                    <hr
                      style={{
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#edeade",
                        background: "#edeade",
                        border: 0,
                        height: 1,
                        textAlign: "left",
                        marginLeft: 0,
                        marginTop: 40,
                        marginBottom: 40,
                        width: 100,
                      }}
                    />
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      II.
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                      id="idea2"
                    >
                      {renderWithLineBreaks(data.idea2)}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    />
                    <hr
                      style={{
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#edeade",
                        background: "#edeade",
                        border: 0,
                        height: 1,
                        textAlign: "left",
                        marginLeft: 0,
                        marginTop: 40,
                        marginBottom: 40,
                        width: 100,
                      }}
                    />
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      III.
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                      id="idea3"
                    >
                      {renderWithLineBreaks(data.idea3)}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    />
                    <table
                      width="100%"
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      style={{
                        fontFamily: "minion-pro, Georgia, serif",
                        textAlign: "center",
                        tableLayout: "fixed",
                        float: "none",
                      }}
                    >
                      <tbody
                        style={{ fontFamily: "minion-pro, Georgia, serif" }}
                      >
                        <tr
                          style={{ fontFamily: "minion-pro, Georgia, serif" }}
                        >
                          <td
                            align="center"
                            style={{ fontFamily: "minion-pro, Georgia, serif" }}
                          >
                            <div
                              style={{
                                fontSize: 18,
                                lineHeight: "1.5em",
                                fontFamily: "minion-pro, Georgia, serif",
                                color: "#111111",
                                paddingBottom: 10,
                                display: "block",
                              }}
                            >
                              <img
                                width={800}
                                height="auto"
                                style={{
                                  fontFamily: "minion-pro, Georgia, serif",
                                  maxWidth: "100%",
                                  height: "auto",
                                  margin: "0 auto",
                                  borderRadius: "4px 4px 4px 4px",
                                  width: 800,
                                  objectFit: "contain",
                                }}
                                src="https://ci3.googleusercontent.com/meips/ADKq_NZjt53rpkXU6-sAJiM5UYlKeFQm59c6D2jshcLpPElJajOlfJRp4mOLAT10P9RTWaGeHc6d5-J-V8vAUmqQG268txBUH_qlU5wsdtMi7RPygj4gdRPIBwDqK5j7i6EmrA7S4WfAzCRN=s0-d-e1-ft#https://embed.filekitcdn.com/e/v8SpEtu13mmJwEXTaaGcqH/9q876fzynUWVPvDTfkFxs3/email"
                                className="CToWUd"
                                data-bit="iit"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    ></p>
                    <div
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        paddingBottom: 10,
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "europa, Helvetica, Arial, sans-serif",
                          color: "#111",
                          lineHeight: "1.2",
                          fontSize: 24,
                        }}
                      >
                        2 Quotes From Others
                      </h2>
                    </div>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      I.
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                      id="quote1"
                    >
                      {renderWithLineBreaks(data.quote1)}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      II.
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                      id="quote2"
                    >
                      {renderWithLineBreaks(data.quote2)}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    />
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    ></p>
                    <table
                      width="100%"
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      style={{
                        fontFamily: "minion-pro, Georgia, serif",
                        textAlign: "center",
                        tableLayout: "fixed",
                        float: "none",
                      }}
                    >
                      <tbody
                        style={{ fontFamily: "minion-pro, Georgia, serif" }}
                      >
                        <tr
                          style={{ fontFamily: "minion-pro, Georgia, serif" }}
                        >
                          <td
                            align="center"
                            style={{ fontFamily: "minion-pro, Georgia, serif" }}
                          >
                            <div
                              style={{
                                fontSize: 18,
                                lineHeight: "1.5em",
                                fontFamily: "minion-pro, Georgia, serif",
                                color: "#111111",
                                paddingBottom: 10,
                                display: "block",
                              }}
                            >
                              <img
                                width={600}
                                height="auto"
                                style={{
                                  fontFamily: "minion-pro, Georgia, serif",
                                  maxWidth: "100%",
                                  height: "auto",
                                  margin: "0 auto",
                                  borderRadius: "4px 4px 4px 4px",
                                  width: 600,
                                  objectFit: "contain",
                                }}
                                src="https://ci3.googleusercontent.com/meips/ADKq_NaU-TrT9GkIcYTb4P8A1p56cZ5AEcYoBUa12jXYFOi4--hpuJaIp4fVaQt07qIbeKbA7drVK9r6ed4NQh9thGHsUegzSlSL5xBf7knxceCmoyG-HsCf-UpIvbsz8-Ybno8jsom49Cd2=s0-d-e1-ft#https://embed.filekitcdn.com/e/v8SpEtu13mmJwEXTaaGcqH/qBDyfTcZJ1qoMBrHdvbTPW/email"
                                className="CToWUd"
                                data-bit="iit"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      <em
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                      ></em>
                    </p>
                    <div
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        paddingBottom: 10,
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "europa, Helvetica, Arial, sans-serif",
                          color: "#111",
                          lineHeight: "1.2",
                          fontSize: 24,
                        }}
                      >
                        1 Question For You
                      </h2>
                    </div>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                      id="question1"
                    >
                      {renderWithLineBreaks(data.question1)}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    />
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    ></p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    ></p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      Until next week,
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      Mohamed Alsadadi
                      <br
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                      />
                      <em
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                      >
                        Author of{" "}
                      </em>
                      <a
                        href="https://malsadadi.com"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "inherit",
                          color: "#111111",
                          fontSize: "inherit",
                          textDecoration: "none",
                          borderBottom: "2px solid #e2ddca",
                        }}
                        target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=https://click.convertkit-mail4.com/e5um660nows7hpop934i7mb73elw22/x0hph6hw3w3plou5/aHR0cHM6Ly9hdG9taWNoYWJpdHMuY29tLw%3D%3D&source=gmail&ust=1710161337252000&usg=AOvVaw0mxUiNMAKDqe54SeBoGTbV"
                      >
                        <em
                          style={{
                            fontFamily: "inherit",
                            color: "inherit",
                            fontSize: "inherit",
                          }}
                        >
                          Capitalist Mindset
                        </em>
                      </a>
                      <em
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                      ></em>
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        marginBottom: 12,
                      }}
                    >
                      <em
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                      ></em>
                    </p>
                    <div
                      style={{
                        fontSize: 18,
                        lineHeight: "1.5em",
                        fontFamily: "minion-pro, Georgia, serif",
                        color: "#111111",
                        paddingBottom: 10,
                      }}
                    >
                      {" "}
                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: "1.5",
                          fontFamily: "minion-pro, Georgia, serif",
                          color: "#353535",
                          marginBottom: 12,
                          fontWeight: 400,
                          letterSpacing: 0,
                          textAlign: "center",
                          textTransform: "none",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "inherit",
                            color: "#919191",
                            fontSize: "inherit",
                          }}
                        >
                          Want to sponsor an issue of Capitalist Keys?{" "}
                        </span>
                        <a
                          href="https://click.convertkit-mail4.com/e5um660nows7hpop934i7mb73elw22/25h2hoh2d2d8eph3/aHR0cHM6Ly9qYW1lc2NsZWFyLmNvbS9zcG9uc29y"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "inherit",
                            color: "#0000ff",
                            fontSize: "inherit",
                            textDecoration: "none",
                            borderBottom: "2px solid #e2ddca",
                          }}
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://click.convertkit-mail4.com/e5um660nows7hpop934i7mb73elw22/25h2hoh2d2d8eph3/aHR0cHM6Ly9qYW1lc2NsZWFyLmNvbS9zcG9uc29y&source=gmail&ust=1710161337252000&usg=AOvVaw1WOw2TKLmy-hBo0byvfemA"
                        >
                          <span
                            style={{
                              fontFamily: "inherit",
                              color: "#919191",
                              fontSize: "inherit",
                            }}
                          >
                            Click here to learn more
                          </span>
                        </a>
                        <span
                          style={{
                            fontFamily: "inherit",
                            color: "#919191",
                            fontSize: "inherit",
                          }}
                        >
                          .
                        </span>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              fontSize: 13,
              lineHeight: "1.5",
              fontFamily: "europa, Helvetica, Arial, sans-serif",
              color: "#8b8a89",
              paddingBottom: 10,
              background: "#fff",
              marginTop: 0,
              padding: "20px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 13,
                lineHeight: "1.5",
                fontFamily: "minion-pro, Georgia, serif",
                color: "#8b8a89",
                marginBottom: 12,
              }}
            >
              <strong
                style={{
                  fontFamily: "inherit",
                  color: "inherit",
                  fontSize: "inherit",
                }}
              >
                About this newsletter:
              </strong>
              You are receiving this email because you subscribed to my weekly
              Capitalist Keys newsletter. Every Thursday, I share 3 Keys
              from me, 2 quotes from others, and 1 question for you to ponder.
              Occasionally, I send out longer content on habits and
              self-improvement.
            </p>
            <p
              style={{
                fontSize: 13,
                lineHeight: "1.5",
                fontFamily: "minion-pro, Georgia, serif",
                color: "#8b8a89",
                marginBottom: 12,
              }}
            >
              <strong
                style={{
                  fontFamily: "inherit",
                  color: "inherit",
                  fontSize: "inherit",
                }}
              >
                Update your subscription preferences:
              </strong>
              <a
                href="https://click.convertkit-mail4.com/e5um660nows7hpop934i7mb73elw22/7qh0zkw6u8hozoz6mrtz/aHR0cHM6Ly9qYW1lc2NsZWFyLmNvbS91bnN1YnNjcmliZS0zMjE="
                style={{
                  fontFamily: "inherit",
                  color: "#646463",
                  fontSize: "inherit",
                  textDecoration: "none",
                  borderBottom: "2px solid #e2ddca",
                }}
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://click.convertkit-mail4.com/e5um660nows7hpop934i7mb73elw22/7qh0zkw6u8hozoz6mrtz/aHR0cHM6Ly9qYW1lc2NsZWFyLmNvbS91bnN1YnNjcmliZS0zMjE%3D&source=gmail&ust=1710161337252000&usg=AOvVaw1CVThrTsi3PxXNCxmpF9IH"
              >
                Unsubscribe from the Capitalist Keys newsletter
              </a>
              .
            </p>
            <img
              width={30}
              height={26}
              style={{
                fontFamily: "minion-pro, Georgia, serif",
                maxWidth: "100%",
                height: "auto",
                margin: "40px 0 30px",
              }}
              src="https://ci3.googleusercontent.com/meips/ADKq_NbVBXoIuYm5RGEpEm2apv8tgXCkgZ1zeSU2d8iTJLf_oVaiqusIMPYwB6JuMXIirik_RK58K23dM6QnyM1nFN77f6OgrFqnBnLdHzvoQmzDTJBJlTfE5fE=s0-d-e1-ft#https://jamesclear.com/wp-content/uploads/2020/11/dots-piramid.png"
              className="CToWUd"
              data-bit="iit"
            />
          </div>
        </div>
        <img
          alt=""
          style={{ fontFamily: "minion-pro, Georgia, serif" }}
          src="https://ci3.googleusercontent.com/meips/ADKq_NaZf04pNVVdhfFGh2AzBYYq4-r_u6ED3KO3R75svH7JymYQlSCv-o5RQWSLKeLAqPD5NuelZo6x21iackv1vdoPboviCQXHOOC8mssj9PXUAYpy7-j0=s0-d-e1-ft#https://open.convertkit-mail4.com/e5um660nows7hpop934i7mb73elw22"
          className="CToWUd"
          data-bit="iit"
        />
        <div className="yj6qo" />
        <div className="adL" />
      </>
    </div>
  );
};

export default Layout;
