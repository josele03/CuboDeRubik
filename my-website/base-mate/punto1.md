---
sidebar_position: 2
id: punto1
---

# Conjuntos y Funciones
El primer concepto por definir son los conjuntos. Un **conjunto** $A$, de acuerdo con Georg Cantor -el primero en desarrollar de manera formal y sistemática la teoría de conjuntos-, es una acumulación de elementos distintos que conforman un todo y que está bien definido en el sentido de que no hay ambigüedad sobre si un elemento dado está o no en el conjunto. Si un elemento $a$ pertenece al conjunto $A$ se escribe $a \in A$ y se lee “$a$ es un elemento de $A$”, en cambio, si el elemento $a$ no pertenece al conjunto $A$ se escribe $a \notin A$. 

Un conjunto puede definirse por:
1. extensión: listando explícitamente todos sus elementos
2. comprensión: especificando una propiedad o regla que los elementos deben cumplir.

Algunos ejemplos son:

- \{1, 2, 3, 4, 5\} es el conjunto de los números del uno al cinco.  
- $\mathbb{N} \coloneqq$ \{1, 2, 3, ...\} es el conjunto de los números naturales.
- $\mathbb{Z} \coloneqq$ \{..., -2, -1, 0, 1, 2, ...\} es el conjunto de los números enteros. 
- $P \coloneqq$ conjunto de todas las posibles posiciones del cubo de Rubik $=$ \{p $\mid$ p es una posición resoluble del cubo de Rubik\}.

Un conjunto $A$ es **subconjunto** del conjunto $B$ si todo elemento de $A$ es también elemento de $B$. Esto se escribiría $A \subseteq B$ o $B \supseteq A$. 

Por ejemplo, el conjunto de los números naturales es subconjunto de los números enteros ($\mathbb{N} \subseteq \mathbb{Z}$). El conjunto vacío $\emptyset$, definido como $\emptyset \coloneqq$ conjunto que no contiene ningún elemento $=$ \{\}, es subconjunto de todos los conjuntos.  

Dos operaciones básicas sobre conjuntos son la unión y la intersección. Sean $A$ y $B$ dos conjuntos arbitrarios.

**Definición 1.** Se llama conjunto **unión** de $A$ y $B$ al conjunto que se nota por $A \cup B$ cuyos elementos son los elementos de $A$ y los elementos de $B$, es decir, 
$$
  A \cup B \coloneqq \{x \mid x \in A \text{ ó } x \in B \}\text{.}
$$


**Definición 2.** Se llama conjunto **intersección** de $A$ y $B$, y se nota por $A \cap B$, al conjunto formado por todos los elementos de $A$ que son también elementos de $B$:  
$$
  A \cap B \coloneqq \{x \mid x \in A \text{ y } x \in B \}\text{.}
$$

Dos conjuntos $A$ y $B$ son disjuntos si no tienen elementos en común, es decir, si $A \cap B = \emptyset$. 

**Definición 3.** Una **función** $f$ del conjunto $A$ en el conjunto $B$ es una regla que asigna a cada elemento de $A$, llamado argumento, uno y solo un elemento de $B$, llamado imagen. Se nota como $f: A \to B$, donde $A$ es el conjunto de partida y $B$ el conjunto de llegada. Si tomamos un argumento $a \in A$ cuya imagen sea $b \in B$, se escribe $a \to f(a) = b$. 
 

Se pueden distinguir funciones inyectivas, sobreyectivas y biyectivas. Las funciones **inyectivas** son aquellas en las que la imagen de argumentos distintos es siempre diferente, para todo $a, b \in A$ con $a \neq b$, se verifica que $f(a) \neq f(b)$. Las **sobreyectivas** son aquellas en las que todo elemento del conjunto de llegada es imagen de un elemento del conjunto de partida, para todo $b \in B$ existe $a \in A$ verificando que $f(a) = b$. Por último, las **biyectivas** son tanto inyectivas como sobreyectivas. En una función biyectiva $f: A \to B$, para cada elemento $b \in B$ existe un único $a \in A$ tal que $f(a) = b$.  Por esta razón, podemos definir la función inversa de $f$ como la función $f^{-1}: B \to A$ de tal forma que para cada elemento $a \in A$ existe un único $b \in B$ tal que $f^{-1}(b) = a$. También se puede encontrar $f'$ como notación de la función inversa. 

Dadas dos funciones $f: A \to B$ y $g: B \to C$ se define su **composición** como la función  
$$
    g \circ f: A \to C \text{ donde } (g \circ f)(a) = g(f(a)) \text{ siendo } a \in A.  
$$

Esta operación cumple la siguiente propiedad: dadas las funciones $f: A \to B$, $g: B \to C$ y $h: C \to D$. Se verifica que para todo $a \in A, ((h \circ g) \circ f)(a) = h((g \circ f)(a)) = h(g(f(a))) = (h \circ g)(f(a)) = (h \circ (g \circ f))(a)$ y esto implica que $(h \circ g) \circ f = h \circ (g \circ f)$. A esta propiedad se la conoce como **propiedad asociativa**.

**Definición 4.** El **producto cartesiano** de dos conjuntos dados, $A_1$ y $A_2$, se define como el conjunto $A_1 \times A_2$ cuyos elementos son los pares $(a_1, a_2)$ donde $a_1 \in A_1$ y $a_2 \in A_2$. Esto es, 
$$
    A_1 \times A_2 \coloneqq \{(a_1, a_2) \mid a_1 \in A_1 \text{ y } a_2 \in A_2\}.
$$
 
 Si $\mid A \mid$ es el número de elementos de un conjunto finito $A$, entonces 
 $$
     \mid A_1 \times A_2 \mid = \mid A_1 \mid \cdot \mid A_2 \mid.
 $$

**Definición 5.** Dado un conjunto no vacío $A$, se llama **operación binaria interna** en $A$ a una función definida del conjunto $A \times A$ en el conjunto $A$:
$$
    \cdot : A \times A \to A.
$$

Es decir, si se aplica sobre el elemento $(a, b) \in A \times A$, su imagen $\cdot(a, b)$, que se nota por $a \cdot b$, pertenece al conjunto $A$. En ocasiones, el símbolo anterior que representa la operación se omite al escribir fórmulas matemáticas.

El producto cartesiano de $n$ conjuntos se define de esta forma:  
$$
    A_1 \times A_2 \times ... \times A_n \coloneqq \{(a_1, a_2, ..., a_n) \mid a_1 \in A_1, a_2 \in A_2 , ..., a_n \in A_n\}.
$$
Los elementos de este conjunto se denominan “n-tuplas”.

En cuanto a su número de elementos, se puede aplicar una fórmula parecida a la del producto cartesiano de dos conjuntos. Dicha fórmula es: 
$$
    \mid A_1 \times A_2 \times ... \times A_n \mid = \mid A_1 \mid \cdot \mid A_2 \mid \cdot ... \cdot \mid A_n \mid. 
$$
La fórmula simplificada para el caso en que $A_1 = A_2 = ... = A_n = A$ es $|A^n|=|A|^n$. 

Una **relación** definida en un conjunto $A$ es un subconjunto del producto cartesiano $A \times A$. Si en el conjunto $A$ definimos la relación $R \subset A \times A$, dos elementos $a, b \in A$ del conjunto están relacionados por $R$ si $(a, b) \in R$, esto se escribe $aRb$ y se lee “$a$ está relacionado con $b$ por la relación $R$”. 

Con esto podemos describir relaciones como: un entero está relacionado con otro si su diferencia es múltiplo de tres, una posición $a$ del cubo de Rubik está relacionada con una posición $b$ si se puede llegar a dicha posición en, a lo sumo, un movimiento y una maniobra del cubo de Rubik está relacionada con otra si causa el mismo resultado. 

**Definición 6** Una **relación de equivalencia** en un conjunto $A$ es aquella relación en $A$ que cumple las siguientes propiedades: 
- (R) Reflexividad: $a R a$ para cada $a \in A$. 
- (S) Simetría: $a R b$ implica que $b R a$ para $a, b \in A$. 
- (T) Transitividad: $a R b$ y $b R c$ implica que $a R c$ para $a, b, c \in A$. 


 Con frecuencia, para notar una relación de equivalencia, en vez de usar la letra $R$, se usará el símbolo $\sim$.

Por ejemplo, se puede definir para cada $r \in \mathbb{N}$ una relación en el conjunto $\mathbb{Z}$ del siguiente modo: para todo  $a, b \in \mathbb{Z}$, $ a \sim b$ si y solo si $a - b$ es múltiplo de $r$. Se puede demostrar que es una relación de equivalencia: 
- (R) $a - a = 0 = 0 \cdot r$
- (S) si $a - b = k \cdot r$, entonces $b - a = (-k) \cdot r$ 
- (T) si $a - b = k_1 \cdot r, b - c = k_2 \cdot r$, entonces $a - b + b - c = k_1 \cdot r + k_2 \cdot r \Rightarrow a - c = (k_1 + k_2) \cdot r$ 

Esta relación comúnmente se escribe como “$a = b$ mod $r$” o “$a \equiv b (r)$” que se lee “$a$ es congruente a $b$ módulo $r$”. 

Si $\sim$ es una relación de equivalencia en el conjunto $A$ y $a \in A$, el conjunto 
$$
    [a] \coloneqq \{b \in A \mid b \sim a\}
$$
se denomina **clase de equivalencia** de $a$. 

**Proposición 1.** Las clases de equivalencia con un elemento en común son idénticas.     

_Demostración._ Supongamos dos clases de equivalencia $[a] \coloneqq \{x \in A \mid x \sim a\}$ y $[b] \coloneqq \{x \in A \mid x \sim b\}$ y que el elemento en común es $c \in [a] \cap [b]$. Entonces para todo elemento $d \in [a]$ tal que $d \sim c$, ya que como $c,d \in [a] \Rightarrow d \sim a$ y $a \sim c$, por (T), $d \sim c$. Por otra parte, $c \in [b] \Rightarrow c \sim b$. Luego, aplicando (T) a $d \sim c$ y $c \sim b$, tenemos que $d \sim b \Rightarrow d \in [b]$. Por tanto, $[a] \subseteq [b]$. Análogamente, se puede demostrar que $[b] \subseteq [a]$. En conclusión, $[a] = [b]$. $\Box$

Gracias a esto, podemos concluir que las clases de equivalencia de cualquier conjunto son disjuntas. Y, por tanto, toda relación de equivalencia definida en un conjunto $A$ realiza una partición de ese conjunto mediante sus clases de equivalencia.

Recíprocamente, si el conjunto $A$ está dividido en subconjuntos disjuntos no vacíos, se puede definir una relación de equivalencia cuyas clases son exactamente los subconjuntos dados en la partición. La relación sería la siguiente: 
$$
    a \sim b \text{ si y solo si } a \text{ y } b \text{ pertenecen al mismo subconjunto.}
$$