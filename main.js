const variablesDetectadas = [];

    // Detecta las variables únicas en la expresión
    const detectarVariables = () => {
      const expresion = document.getElementById("expresion").value.trim();
      if (expresion === "") {
        alert("Por favor, escribe una expresión primero.");
        return;
      }

      // Detectar variables (solo letras)
      const posiblesVariables = expresion.match(/[a-zA-Z]+/g);
      if (!posiblesVariables) {
        alert("No se detectaron variables en la expresión.");
        return;
      }

      // Eliminar duplicados
      variablesDetectadas = [...new Set(posiblesVariables)];

      // Crear inputs dinámicamente
      const contenedor = document.getElementById("variablesContainer");
      contenedor.innerHTML = "<h5>Introduce los valores de las variables:</h5>";

      variablesDetectadas.forEach(variable => {
        const div = document.createElement("div");
        div.classList.add("mb-2");
        div.innerHTML = `
          <label class="form-label">${variable}:</label>
          <input type="number" class="form-control variableInput" id="var_${variable}" placeholder="Valor de ${variable}">
        `;
        contenedor.appendChild(div);
      });

      document.getElementById("resultado").innerText = "";
      document.getElementById("cuadruplosContainer").innerHTML = "";
    }

    // Genera los cuádruplos de una expresión simple
    const generarCuadruplos = (expr) => {
      const operadores = ["*", "/", "+", "-"];
      const cuadruplos = [];
      let tempCount = 1;

      // Eliminar espacios
      expr = expr.replace(/\s+/g, "");

      // Resolver * y /
      for (let op of ["*", "/"]) {
        let regex = new RegExp(`([a-zA-Z0-9.]+)\\${op}([a-zA-Z0-9.]+)`);
        while (regex.test(expr)) {
          const match = expr.match(regex);
          const arg1 = match[1];
          const arg2 = match[2];
          const temp = `t${tempCount++}`;
          cuadruplos.push({ op, arg1, arg2, res: temp });
          expr = expr.replace(match[0], temp);
        }
      }

      // Resolver + y -
      for (let op of ["+", "-"]) {
        let regex = new RegExp(`([a-zA-Z0-9.]+)\\${op}([a-zA-Z0-9.]+)`);
        while (regex.test(expr)) {
          const match = expr.match(regex);
          const arg1 = match[1];
          const arg2 = match[2];
          const temp = `t${tempCount++}`;
          cuadruplos.push({ op, arg1, arg2, res: temp });
          expr = expr.replace(match[0], temp);
        }
      }

      // Resultado final
      cuadruplos.push({ op: "=", arg1: "", arg2: expr, res: "r" });

      return cuadruplos;
    }

    // Función principal de cálculo
    const calcular = () => {
      const expresion = document.getElementById("expresion").value.trim();
      if (expresion === "") {
        alert("Por favor, ingresa una expresión.");
        return;
      }

      // Obtener valores de las variables
      let valores = {};
      for (let variable of variablesDetectadas) {
        const valor = parseFloat(document.getElementById(`var_${variable}`).value);
        if (isNaN(valor)) {
          alert(`Por favor, ingresa un valor para "${variable}".`);
          return;
        }
        valores[variable] = valor;
      }

      // Sustituir variables con valores
      let expresionConValores = expresion;
      for (let [variable, valor] of Object.entries(valores)) {
        const regex = new RegExp(`\\b${variable}\\b`, "g");
        expresionConValores = expresionConValores.replace(regex, valor);
      }

      // Generar cuádruplos
      const cuadruplos = generarCuadruplos(expresion);

      // Mostrar procedimiento
      let procedimiento = `Expresión original: ${expresion}\n\n`;
      procedimiento += `Sustituyendo valores:\n${expresionConValores}\n\n`;

      try {
        const resultado = eval(expresionConValores);
        procedimiento += `Resultado final: ${resultado}`;
        document.getElementById("resultado").innerText = resultado;
      } catch (error) {
        document.getElementById("resultado").innerText = "";
        return;
      }

      // Mostrar tabla de cuádruplos
      let tabla = `
        <table class="table table-bordered text-center align-middle">
          <thead class="table-secondary">
            <tr>
              <th>#</th>
              <th>Op</th>
              <th>Arg1</th>
              <th>Arg2</th>
              <th>Res</th>
            </tr>
          </thead>
          <tbody>
      `;

      cuadruplos.forEach((c, i) => {
        tabla += `
          <tr>
            <td>${i + 1}</td>
            <td>${c.op}</td>
            <td>${c.arg1}</td>
            <td>${c.arg2}</td>
            <td>${c.res}</td>
          </tr>
        `;
      });

      tabla += `</tbody></table>`;
      document.getElementById("cuadruplosContainer").innerHTML = tabla;
    }