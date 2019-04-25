import BoardCockpit from "../containers/BoardCockpit";
import Test from "./Test";

export default [
  {
    main: { path: "/board", component: BoardCockpit, exact: true },
    children: [{ path: "/test", component: Test, exact: true }]
  },
];
