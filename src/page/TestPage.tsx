import React, { useEffect, useMemo, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/slice/counterSlice";
import { Button, Input } from "antd";
import type { RootState } from "@/store";
import _axios from "@/utils/axios";

function TestPage() {
  const history = useHistory();
  const location = useLocation();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const goBack = () => {
    history.go(-1);
  };

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <>
      <div>以下状态由redux管理</div>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </Button>
      <br />
      <div>{doubleCount}</div>
      <Button onClick={goBack}>返回</Button>
    </>
  );
}

export default TestPage;
