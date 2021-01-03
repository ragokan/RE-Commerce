import React from "react";
import { connect } from "react-redux";
import { List } from "antd";
import lokaly from "lokaly";

const AccountDetails = ({ user }) => {
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
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
