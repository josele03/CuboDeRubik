---
sidebar_position: 7
sidebar_label: Paso 6
---

# El orden de las esquinas de la última cara

En este paso, se utilizará un algoritmo para ordenar las esquinas de la última cara, sin desordenar las aristas.

Para ello, buscaremos una arista colocada y aplicaremos el algoritmo, eligiendo como cara frontal aquella que tenga la esquina colocada en la parte superior derecha.

![paso6](./img/paso6.png)

En la imagen la cara frontal es la cara azul.

Se puede dar el caso en el que no haya ninguna arista colocada. Para solucionar esto, aplicamos el algoritmo, independientemente de la cara que elijamos como frontal, hasta tener una arista colocada.
