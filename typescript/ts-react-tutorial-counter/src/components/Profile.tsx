import * as React from "react";

interface Props {
  name: string;
  job: string;
}

class Profile extends React.Component<Props> {
  public render() {
    const { name, job } = this.props;
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <b>name : </b>
          {name}
        </div>
        <div>
          <b>job : </b>
          {job}
        </div>
      </div>
    );
  }
}

// const Profile2 = ({ name, job }: Props) => (
//   <div>
//     <h1>Profile</h1>
//     <div>
//       <b>name : </b>
//       {name}
//     </div>
//     <div>
//       <b>job : </b>
//       {job}
//     </div>
//   </div>
// );

// const Profile3: React.SFC<Props> = ({ name, job }) => (
//   <div>
//     <h1>Profile</h1>
//     <div>
//       <b>name : </b>
//       {name}
//     </div>
//     <div>
//       <b>job : </b>
//       {job}
//     </div>
//   </div>
// );

export default Profile;
