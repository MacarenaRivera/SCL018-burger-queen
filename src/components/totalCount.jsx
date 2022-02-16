import React, { useContext } from "react";
import { Context } from "./context";
import styles from "./css/totalCount.module.css";

//Componente para mostrar el total de la cuenta
const TotalCount = () => {
  const globalContext = useContext(Context);
  return (
    <section className={styles.total}>
      {globalContext.products.length !== 0 && (
        <section>
          <p>Total $ {globalContext.itemsPrice} </p>
        </section>
      )}
    </section>
  );
};
export default TotalCount;
