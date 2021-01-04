import React from "react";
import { connect } from "react-redux";
import { Button, List, Radio } from "antd";
import lokaly from "lokaly";
let currentLanguage = localStorage.getItem("language");
if (!currentLanguage) currentLanguage = "en";

const AccountDetails = ({ user }) => {
  const setSelectedLanguage = (lang) => {
    localStorage.setItem("language", lang);
    window.location.reload();
  };
  return (
    <>
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta title={lokaly("fullname")} description={user.fullname} />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title="E-Mail"
            description={user.email}
            style={{ textTransform: "none" }}
          />
        </List.Item>

        <List.Item>
          <List.Item.Meta title={lokaly("accountType")} description={user.type} />
        </List.Item>

        <List.Item>
          <Radio.Group>
            <Button
              type={currentLanguage === "en" && "primary"}
              onClick={() => setSelectedLanguage("en")}
            >
              English
            </Button>
            <Button
              type={currentLanguage === "tr" && "primary"}
              onClick={() => setSelectedLanguage("tr")}
            >
              Turkish
            </Button>
          </Radio.Group>
        </List.Item>
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
