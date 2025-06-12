---
sidebar_position: 3
id: punto2
---

# Grupos
El modelo matemático del cubo de Rubik está estrechamente relacionado con la teoría de grupos, ya que el propio cubo constituye un grupo. Antes de profundizar en su análisis, es importante definir las propiedades y características de lo que matemáticamente se entiende por grupo. 

**Definición 7.** Un **grupo** es un par $(A, \cdot)$ formado por un conjunto no vacío $A$ y una operación binaria interna 

$\cdot : A \times A \to A$ que cumple las condiciones siguientes:
- (A) Asociatividad: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$, para $a, b, c \in A$. 
- (E) Existencia de elemento neutro: existe $e \in A$ tal que $a \cdot e = e \cdot a = a$ para todo $a \in A$.  
- (I) Existencia de elemento inverso: para todo $a \in A$ existe un $a' \in A$ tal que $a' \cdot a = a \cdot a' = e$ 

Si además el grupo cumple la siguiente propiedad:
- (C) Conmutatividad: $ab = ba$ para todos $a, b \in A$,
se llama **grupo conmutativo o abeliano**. 

**Proposición 2.** En todo grupo, el elemento neutro y el inverso son únicos. 

\_Demostración.\_ La demostración de este resultado se puede consultar en el Teorema 1.2.2 del libro *Introducción a la Teoría de Grupos* de F. B. Mora.

En el caso en el que la operación sea conmutativa, se utiliza con frecuencia el símbolo $+$, se toma como elemento neutro el 0 y el inverso se expresa como $-a$.  

**Definición 8.** Sea $(A, \cdot)$ un grupo. Un subconjunto $B$ no vacío del conjunto $A$ se denomina **subgrupo** de $A$ si $(B, \cdot)$ es un grupo con la misma operación definida en $A$.     

Los subgrupos triviales de $(A, \cdot)$ son él mismo y el conjunto que solo contiene al elemento neutro $(\{e\}, \cdot)$. 

**Proposición 3. Caracterización de subgrupos.** Si $(A, \cdot)$ es un grupo y $B \subseteq A$ es subconjunto no vacío de $A$, entonces si se cumple que para todos $a, b \in B$, es $ab \in B$ y para todo $a \in B$, es $a' \in B$ siendo $a'$ el inverso de $a$, entonces $(B, \cdot)$ es subgrupo de $(A, \cdot)$.    

\_Demostración.\_ Se puede demostrar que $(B, \cdot)$ es grupo, porque se cumplen las condiciones de grupo:
- (A) Como $(A, \cdot)$ es grupo, sus elementos cumplen la propiedad asociativa y, puesto que todo elemento de $B$ es elemento de $A$ por ser este subconjunto, los elemento de $B$ también la cumplen.
- (I) Esta propiedad se cumple por la segunda hipótesis de la caracterización.
- (E) Sea $b \in B \subset A$ y su inverso $b' \in B \subset A$. Como $B$ es subconjunto de $A$, entonces $b, b' \in A$. Luego, se cumple que el elemento neutro de $A$ es $e = bb' = b'b$ y puesto que, por la primera hipótesis, $bb' \in B$ por ser ambos elementos de $B$, entonces $bb' = e \in B$, es decir, el elemento neutro de $A$ es también elemento neutro de $B$. $\Box$

**Definición 9.** Un subgrupo $B$ del grupo $A$ se llama **subgrupo normal o invariante** de $A$ si es invariante bajo todos los automorfismos internos, es decir, para $a \in A$ y  $b \in B$ se cumple siempre que $a'ba\in B$.

**Definición 10.** Una función $\pi$ del grupo $(A, \circ)$ al grupo $(B, \cdot)$, definida de la siguiente forma $\pi: A \to B$, se denomina **homomorfismo** de grupos si para cada $a_1, a_2 \in A$, tenemos que $\pi(a_1 \circ a_2) = \pi(a_1)\cdot \pi(a_2)$. Si $\pi$ es también biyectiva, se llama **isomorfismo** de grupos y se dice que los grupos $(A, \circ)$ y $(B, \cdot)$ son **isomorfos**, denotado por $A \cong B$. Si A es homomorfismo o isomorfismo sobre sí mismo, se llama **endomorfismo** o **automorfismo**, respectivamente.

Particularmente nos interesan los llamados **grupos cíclicos**. Todo grupo cíclico de orden $n \in \mathbb{N}$ es isomorfo a $(C_n, \oplus)$, siendo el conjunto $C_n \coloneqq \{0, 1, ..., n-1\}$ y la operación $\oplus$: 
$$
    a \oplus b \coloneqq
    \left\{
  \begin{array}{l}
    a + b, \text{ si } a + b < n \\
    a + b - n, \text{ si } a + b \geq n
  \end{array}
\right.
$$
Estos grupos con dicha operación son todos grupos abelianos. Por comodidad de notación se puede omitir el círculo del signo para indicar la operación.

Por ejemplo, la operación en $C_3$ se puede representar con la siguiente tabla: 
| $+$ | $0$ | $1$ | $2$ |
|-----|-----|-----|-----|
| $0$ | $0$ | $1$ | $2$ |
| $1$ | $1$ | $2$ | $0$ |
| $2$ | $2$ | $0$ | $1$ |

**Proposición 4.** Sea $S_A$ el conjunto de todas las funciones biyectivas del conjunto $A$ en él mismo. Este conjunto con la operación composición es un grupo y se nota por $(S_A, \circ)$.    

_Demostración._ Se cumplen los tres requisitos necesarios para ser grupo:
- (A) En el punto anterior se demostró que la composición de funciones es asociativa.
- (E) El elemento neutro es la función identidad $I$ o $I_A$ que se define como $I(a) = a$ para todo $a \in A$
- (I) La inversa de una función $f$, también definida anteriormente como $f^{-1}$, es una función en $S_A$. $\Box$

Este grupo se denomina **grupo simétrico** en $A$ y sus elementos son **permutaciones** de A. Tomando $A = \{1, 2, ..., n\}$, en vez de $S_A$, se escribe $S_n$.  

**Relación del cubo de Rubik con el grupo de permutaciones.**

El cubo de Rubik está formado por tres tipos de cubitos distintos. Las esquinas que tienen tres caras visibles, las aristas con dos caras visibles y los centros con solo una cara visible (los centros son también llamados caras del cubo). En total hay ocho esquinas, doce aristas y seis centros. Por lo cual podemos establecer una biyección entre las posiciones de las esquinas y ellas mismas. Análogamente, se establece una biyección entre las posiciones de las aristas y una biyección entre las posiciones de los centros.  

Como resultado tenemos que el conjunto de las biyecciones de las posiciones de las esquinas es isomorfo a $S_8$, el conjunto las biyecciones de las posiciones de las aristas es isomorfo a $S_{12}$ y el conjunto las biyecciones de las posiciones de los centros es isomorfo a $S_6$.
**Teorema 1.**
$\mid S_n \mid = 1 \cdot 2 \cdot ... \cdot n \eqqcolon n!$ (n factorial) 
 
_Demostración._ Para determinar una permutación, tenemos que asignar a cada elemento de $\{1, ..., n\}$ un elemento del mismo conjunto, teniendo en cuenta que no se pueden repetir. En el primer paso elegimos la imagen de $1$ entre n posibilidades. Para la imagen de $2$ solo podemos elegir entre $n - 1$ posibilidades. Repitiendo el proceso, llegamos a que en total hay $n \cdot (n - 1) \cdot ... \cdot 1 = n!$ formas distintas de construir una permutación. Y, por tanto, $\mid S_n \mid = n!$. $\Box$

Un **ciclo** de longitud $r \in \mathbb{N}$ es una permutación $f$ de los elementos de un conjunto $A$ tal que solo existen $r$ elementos cuya imagen no coincide con ellos mismos, y esos elementos se pueden ordenar de tal forma que la imagen del primer elemento es el segundo, la imagen del segundo es el tercero y se repite el proceso hasta el último, cuya imagen es el primero. Por ejemplo, un ciclo de longitud $3$ es de esta forma $f = (i_1, i_2, i_3)$, lo que implica que $f(i_1) = i_2$, $f(i_2) = i_3$, $f(i_3) = i_1$ y, para el resto de elementos de $A$, es decir, para todo $i \in A \backslash \{i_1, i_2, i_3\}$, tenemos que $f(i) = i$. Los ciclos de longitud $r$ también se denominan **r-ciclos** y son de la forma $f = (i_1, i_2, ..., i_r)$ con $i_1, ..., i_r$ elementos distintos del conjunto $A$ al que pertenecen. Luego, $f(i_1) = i_2, f(i_2) = i_3, ..., f(i_r) = i_1$ y $f(i) = i$ para $i \in A \backslash \{i_1, ..., i_r\}$. 

Dos ciclos $(i_1, ..., i_r)$ y $(j_1, ..., j_s)$ se consideran disjuntos si lo son los conjuntos $\{i_1, ..., i_r\}$ y $\{j_1, ..., j_s\}$. Es posible representar las permutaciones como producto de ciclos disjuntos. 

Volviendo a los grupos simétricos, el grupo $S_3$, por ejemplo, tiene los siguientes elementos, expresados en forma de producto de ciclos disjuntos:
$$
    S_3 = \{(1), (1, 2), (1, 3), (2, 3), (1, 2, 3), (1, 3, 2)\}
$$
que en total son $3! = 6$ elementos. 

Los 2-ciclos, es decir, las permutaciones en las que solo se intercambian dos elementos, se denominan **transposiciones**. Para operar con ciclos, se suele omitir el símbolo $\circ$, escribiendo $gf$ en vez de $g \circ f$.

**Teorema 2.** En $S_n$ con $n \geq 2$, cada permutación se puede escribir como producto de transposiciones.    

_Demostración._ Puesto que cualquier permutación se puede escribir como producto de ciclos disjuntos, solo queda ver que estos se puedan expresar como productos de transposiciones. Sea $f$ un r-ciclo cualquiera, $f = (i_1, i_2, ..., i_r) = (i_1, i_3, ..., i_r)(i_1, i_2)$ $ = (i_1, i_r)(i_1, i_{r-1})...(i_1, i_3)(i_1, i_2)$. $\Box$

El grupo simétrico $S_n$ no es abeliano para $n \geq 3$, ya que $(2, 3)(1, 2) = (1, 3, 2)$ y $(1, 2)(2, 3) = (1, 2, 3) \neq (1, 3, 2)$. Para identificar la conmutatividad de cualquier grupo simétrico $S_A$ necesitaremos el centro de $A$, $Z(A)$.

**Definición 11.** Sea el grupo $(A, \cdot)$. Entonces el **centro** de $A$ es
$$
    Z(A) \coloneqq \{a \in A \mid ab = ba \text{ para todo } b \in A\}.
$$    

**Proposición 5.** $Z(A)$ es subgrupo de $A$.    

_Demostración._ Puesto que si $a, b \in Z(A)$, entonces $ab \in Z(A)$ porque para cualquier $c \in A$ se tiene que 
$(ab)c = a(bc) = a(cb) = (ac)b = (ca)b = c(ab)$, ya que $a, b \in Z(A)$. Luego, $(ab)c = c(ab)$ y, por tanto, $ab \in Z(A)$. Y si $a \in Z(A)$, entonces $a' \in Z(A)$ porque para cualquier $b \in A$ se tiene que $a'b = (b'a)' = (ab')' = ba' \Rightarrow a'b = ba'$.$\Box$

**Teorema 3.** Para $n \geq 3$ el centro de $S_n$, $Z(S_n)$ contiene solo el elemento neutro $(1)$.   
 

_Demostración._ Sea $f \in S_n$ y $f \neq (1)$, entonces existe un $a \in \{1, ..., n\}$ tal que $f(a) = b \neq a$. Puesto que $n \geq 3$, sea un $c \in \{1, ..., n\}$, $c \neq a$ y $c \neq b$ y sea el ciclo $g = (b, c) \in S_n$. Para que se cumpla que $f \in Z(A)$, se debe cumplir que $fg = gf$, pero no se cumple porque $fg(a) = f(g(a)) = f(a) = b$ y $gf(a) = g(f(a)) = g(b) = c  \neq b \Rightarrow fg(a) \neq gf(a) \Rightarrow fg \neq gf$. $\Box$

Una **inversión** de una permutación $f$ es un par $(i, j)$ del conjunto $\{1, ..., n\}$ que cumple que $i<j$ y $f(i) > f(j)$.

Una permutación $f$ puede ser **par** o **impar** dependiendo de si el número $z$ de sus inversiones es par o impar, respectivamente. Luego, podemos definir el **signo** de $f$ como $(-1)^{z}$ y se escribiría $sgn$ $f$. Otra definición de la paridad de las permutaciones deriva del Teorema 2, una permutación es par si se puede expresar como producto de un número par de transposiciones, y de la misma forma se definen las permutaciones impares como aquellas que se pueden expresar como producto de un número impar de transposiciones. En el grupo $S_n$, las permutaciones se comportan como los enteros con la suma: la composición de dos permutaciones pares o dos permutaciones impares es siempre par y la composición de una permutación par y una permutación impar es impar.

**Teorema 4.** $sgn(fg) = sgn$ $f \cdot sgn$ $g$   

_Demostración._ Como cualquier permutación se puede expresar como producto de transposiciones, $fg$ también, y es el producto de las transposiciones de $f$ por las de $g$. Por tanto, sea $t_1$ y $t_2$ el número de transposiciones de $f$ y $g$, respectivamente, entonces el número de transposiciones de $fg$ será $t_1 + t_2$. Se concluye con que si ambos son pares ($sgn$ $f = sgn$ $g = 1$) o impares ($sgn$ $f = sgn$ $g = -1$), $t_1 + t_2$ es par ($sgn(fg) = 1$), y se verifica que $sgn(fg) = 1 \cdot 1 = (-1) \cdot (-1) = 1$. De la misma manera, si uno es par y el otro impar, $fg$ tendrá un número impar de transposiciones ($sgn(fg) = -1$), y también se verifica que $sgn(fg) = 1 \cdot (-1) = (-1) \cdot 1 = -1$. $\Box$

Gracias al teorema anterior, podemos decir que el conjunto de las permutaciones pares de $S_n$ es un subgrupo de $S_n$ y se le denomina **grupo alternado** $A_n$. Para $n \geq 2$ hay tantas permutaciones pares como impares, luego, $\mid A_n \mid = n!/2$. 

Dado un subconjunto $C \subset A$ de un conjunto $A$, siempre es posible determinar, a partir del grupo $(A, \cdot)$, un subgrupo $(B, \cdot)$ tal que es el menor subgrupo que contiene todos los elementos de $C$. Este subgrupo se puede definir como la intersección de todos los subgrupos de $(A, \cdot)$ que contienen los elementos de $C$, puesto que la intersección arbitraria de subgrupos de un grupo $(A, \cdot)$ es también un subgrupo de $(A, \cdot)$. El subgrupo $(B, \cdot)$ recibe el nombre de **subgrupo generado** por $C$ y se dice que el conjunto $C$ es generador de $(B, \cdot)$. Por ejemplo, como consecuencia del Teorema 2, el conjunto de todas las transposiciones genera el grupo $S_n$ completo. Otro ejemplo de conjunto generador de $S_n$ es el formado por las transposiciones de la forma $(1, i)$, ya que toda transposición $(i, j)$ se puede expresar como $(i, j) = (1, i)(1, j)(1, i)$.

**Teorema 5.** Para $n \geq 3$, cada elemento del grupo alternado $A_n$ se puede expresar como un producto de 3-ciclos.

_Demostración._ Basándonos en que el conjunto de transposiciones de la forma $(1, i)$ es generador de $S_n$ y en la definición de grupo alternado, los elementos de $A_n$ se pueden expresar como un producto de un número par de transposiciones de la forma $(1, i)$. Ahora basta con tomar las transposiciones del producto de dos en dos, ya que para $i \neq j$ tenemos que $(1, i)(1, j) = (1, j, i)$. Además, el elemento neutro $(1) = (1, 2, 3)^3$. Por tanto, todo elemento se puede expresar como producto de 3-ciclos. $\Box$

Como resultado del teorema anterior, podemos decir que el grupo $A_n$ está generado por el conjunto formado por 3-ciclos de la forma $(1, i, j)$. Además, como $(1, i, j) = (1, 2, j)^2(1, 2, i)(1, 2, j)$,  $A_n$ puede ser generado por el conjunto formado por 3-ciclos de la forma $(1, 2, i)$.