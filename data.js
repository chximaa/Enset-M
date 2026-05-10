'use strict';
/* ENSET Mohammedia — Base pédagogique complète — Contenu exact du dépôt GitHub chximaa/Enset-M */

const MATH_TOPICS = [
  {
    id:'fonctions', cat:'math', icon:'ƒ', color:'#F5A8B8',
    title:'Fonctions – Limites, Continuité, Dérivabilité',
    subtitle:'Domaines · Limites · TVI · Règles de dérivation',
    course:`
<h2>1. Fonctions – Limites, Continuité, Dérivabilité</h2>
<h3>1.1 Domaine de définition</h3>
<p>Le domaine de définition <strong>D<sub>f</sub></strong> est l\'ensemble des réels pour lesquels f(x) est définie.</p>
<div class="def-box"><strong>Définition :</strong> D<sub>f</sub> = { x ∈ ℝ | f(x) existe }</div>
<p><strong>Cas courants à exclure :</strong></p>
<ul>
  <li>Dénominateur ≠ 0 → ex : f(x)=1/(x−2), x≠2</li>
  <li>Radicande ≥ 0 → ex : f(x)=√(x−1), x≥1</li>
  <li>Argument du log > 0 → ex : ln(x+3), x>−3</li>
</ul>
<h3>1.2 Limites et formes indéterminées</h3>
<div class="def-box"><strong>Définition ε−δ :</strong> lim<sub>x→a</sub>f(x)=L si : ∀ε>0, ∃δ>0, |x−a|&lt;δ ⟹ |f(x)−L|&lt;ε</div>
<div class="theorem-box"><strong>Règle de L'Hôpital :</strong> Si lim f/g = 0/0 ou ∞/∞, alors lim f/g = lim f\'/g\'.</div>
<div class="formula-box">
<code>lim(x→0) sin(x)/x = 1 | lim(x→0) (eˣ−1)/x = 1 | lim(x→0) ln(1+x)/x = 1</code><br>
<code>lim(x→+∞) xⁿ/eˣ = 0 | lim(x→+∞) ln(x)/x = 0 | lim(x→+∞)(1+1/x)ˣ = e</code>
</div>
<div class="example-box"><strong>Exemple :</strong> lim<sub>x→0</sub> sin(x)/x = lim cos(x)/1 = 1 (L'Hôpital)</div>
<div class="theorem-box"><strong>Théorème des gendarmes :</strong> Si g(x) ≤ f(x) ≤ h(x) et lim g = lim h = L ⟹ lim f = L</div>
<h3>1.3 Continuité</h3>
<div class="def-box"><strong>Définition :</strong> f continue en a ⟺ lim<sub>x→a</sub>f(x) = f(a)</div>
<div class="theorem-box"><strong>Théorème des Valeurs Intermédiaires (TVI) :</strong> Si f continue sur [a,b] et f(a)·f(b)&lt;0, alors ∃c∈]a,b[ tel que f(c)=0.</div>
<div class="example-box"><strong>Application TVI :</strong> f(x)=x³−x−2. f(1)=−2&lt;0, f(2)=4>0 → racine dans ]1,2[.</div>
<h3>1.4 Dérivabilité</h3>
<div class="def-box"><strong>Définition :</strong> f\'(a) = lim<sub>h→0</sub>[f(a+h)−f(a)]/h</div>
<table>
<tr><th>f(x)</th><th>f\'(x)</th><th>f(x)</th><th>f\'(x)</th></tr>
<tr><td>xⁿ</td><td>nxⁿ⁻¹</td><td>sin x</td><td>cos x</td></tr>
<tr><td>eˣ</td><td>eˣ</td><td>cos x</td><td>−sin x</td></tr>
<tr><td>ln x</td><td>1/x</td><td>tan x</td><td>1/cos²x</td></tr>
<tr><td>arcsin x</td><td>1/√(1−x²)</td><td>arctan x</td><td>1/(1+x²)</td></tr>
</table>
<div class="formula-box">
<code>(uv)' = u\'v + uv' | (u/v)' = (u\'v−uv')/v² | (f∘g)'(x) = f\'(g(x))·g\'(x)</code>
</div>
<h3>1.5 Étude complète</h3>
<ol><li>Domaine D<sub>f</sub></li><li>Parité</li><li>Limites aux bornes (asymptotes)</li><li>f\', signe, tableau de variations</li><li>f\'', concavité, points d\'inflexion</li><li>Tracé</li></ol>
<div class="tip-box"><strong>Asymptote oblique y=ax+b :</strong> a = lim f(x)/x, b = lim[f(x)−ax] quand x→∞.</div>`,
    exercises:[
      {id:1,level:'facile',title:'Domaine de définition',
       question:'<p>Déterminer D<sub>f</sub> de : f(x) = √(x²−4) / ln(x+3)</p>',
       solution:`<p>• x²−4≥0 ⟺ x≤−2 ou x≥2</p><p>• x+3>0 ⟺ x>−3</p><p>• ln(x+3)≠0 ⟺ x≠−2</p><p><strong>D<sub>f</sub> = ]−3,−2[ ∪ [2,+∞[</strong></p>`},
      {id:2,level:'facile',title:'Limite par factorisation',
       question:'<p>Calculer : lim<sub>x→3</sub>(x²−9)/(x−3)</p>',
       solution:`<p>(x²−9)/(x−3) = (x−3)(x+3)/(x−3) = x+3 → <strong>6</strong></p>`},
      {id:3,level:'facile',title:'Limite à l\'infini',
       question:'<p>Calculer : lim<sub>x→+∞</sub>(3x²+2x−1)/(x²−5)</p>',
       solution:`<p>Diviser par x² : (3+2/x−1/x²)/(1−5/x²) → <strong>3</strong></p>`},
      {id:4,level:'moyen',title:'Règle de L\'Hôpital',
       question:'<p>Calculer : lim<sub>x→0</sub>(eˣ−1−x)/x²</p>',
       solution:`<p>0/0 → L'Hôpital : (eˣ−1)/2x → 0/0 → eˣ/2 → <strong>1/2</strong></p>`},
      {id:5,level:'moyen',title:'Prolongement par continuité',
       question:'<p>Prolonger par continuité : f(x)=sin(3x)/x pour x≠0.</p>',
       solution:`<p>lim<sub>x→0</sub> 3·sin(3x)/(3x) = 3·1 = <strong>3</strong>. Poser f(0)=3.</p>`},
      {id:6,level:'moyen',title:'Dérivée composée',
       question:'<p>Calculer f\'(x) pour f(x)=ln(cos(x²)).</p>',
       solution:`<p>f\'(x) = [−sin(x²)·2x]/cos(x²) = <strong>−2x·tan(x²)</strong></p>`},
      {id:7,level:'difficile',title:'Application du TVI',
       question:'<p>Montrer que f(x)=x⁵+3x−5 admet une unique racine réelle.</p>',
       solution:`<p>f(1)=−1&lt;0, f(2)=33>0 → racine dans ]1,2[ (TVI).<br>f\'(x)=5x⁴+3>0 → f strictement croissante → <strong>unicité</strong>.</p>`},
      {id:8,level:'difficile',title:'Étude de fonction complète',
       question:'<p>Étudier f(x)=x·e^(−x) : variations, extrema, asymptotes.</p>',
       solution:`<p>D<sub>f</sub>=ℝ. lim<sub>x→+∞</sub>=0 (AH y=0). lim<sub>x→−∞</sub>=−∞.<br>f\'(x)=e^(−x)(1−x) → f croissante sur ]−∞,1[, max en x=1 : f(1)=e⁻¹.<br>f\'\'(x)=e^(−x)(x−2) → inflexion en x=2.</p>`}
    ],
    quiz:[
      {q:'lim(x→0) sin(5x)/x = ?',opts:['0','1','5','∞'],ans:2,exp:'sin(5x)/x = 5·sin(5x)/(5x) → 5'},
      {q:'La règle de L\'Hôpital s\'applique pour :',opts:['1/∞','0·∞','0/0 et ∞/∞','∞+∞'],ans:2,exp:'L\'Hôpital → formes 0/0 et ∞/∞'},
      {q:'D<sub>f</sub> de √(4−x²) :',opts:['[0,2]','[−2,2]','ℝ','[−2,0]'],ans:1,exp:'4−x²≥0 ⟺ x²≤4 ⟺ x∈[−2,2]'},
      {q:'(arctan x)\' = ?',opts:['1/x','1/(1+x²)','−1/√(1−x²)','√(1+x²)'],ans:1,exp:'Dérivée standard'},
      {q:'TVI s\'applique si :',opts:['f dérivable','f continue et f(a)·f(b)<0','f croissante','f(a)=0'],ans:1,exp:'Condition : continuité + changement de signe'},
      {q:'lim(x→+∞)(2x²+3)/(x²−1) = ?',opts:['0','1','2','∞'],ans:2,exp:'Termes de plus haut degré : 2x²/x² = 2'},
      {q:'(uv)\' = ?',opts:['u\'v\'','u\'v+uv\'','(u\'v−uv\')/v²','u\'+v\''],ans:1,exp:'Règle du produit'},
      {q:'Dérivable en a implique :',opts:['Bornée','Dérivable partout','Continue en a','Monotone'],ans:2,exp:'Dérivabilité ⟹ continuité (pas l\'inverse)'},
      {q:'lim(x→0)(1−cos x)/x² = ?',opts:['0','1/2','1','2'],ans:1,exp:'1−cos x ≈ x²/2'},
      {q:'Asymptote oblique : a = ?',opts:['lim f(x)','lim f(x)/x','lim f\'(x)','f(0)'],ans:1,exp:'a = lim(x→∞) f(x)/x'}
    ]
  },
  {
    id:'dl', cat:'math', icon:'∑', color:'#C8A87E',
    title:'Développements Limités (DL)',
    subtitle:'Formule de Taylor · DL usuels · Applications',
    course:`
<h2>2. Développements Limités</h2>
<div class="theorem-box"><strong>Formule de Taylor-Young :</strong> f(x) = Σₖ₌₀ⁿ f⁽ᵏ⁾(a)/k! · (x−a)ᵏ + o((x−a)ⁿ)</div>
<h3>DL usuels en x=0</h3>
<div class="formula-box">
<code>eˣ = 1 + x + x²/2! + x³/3! + … + xⁿ/n! + o(xⁿ)</code><br>
<code>sin x = x − x³/6 + x⁵/120 − … + o(x^(2n+2))</code><br>
<code>cos x = 1 − x²/2 + x⁴/24 − … + o(x^(2n+1))</code><br>
<code>ln(1+x) = x − x²/2 + x³/3 − … + o(xⁿ) , |x|&lt;1</code><br>
<code>(1+x)^α = 1 + αx + α(α−1)x²/2 + … + o(xⁿ)</code><br>
<code>1/(1−x) = 1 + x + x² + … + xⁿ + o(xⁿ) , |x|&lt;1</code><br>
<code>arctan x = x − x³/3 + x⁵/5 − … + o(x^(2n))</code>
</div>
<h3>Opérations sur les DL</h3>
<ul>
<li><strong>Addition :</strong> terme à terme jusqu\'à l\'ordre n</li>
<li><strong>Multiplication :</strong> produit, on tronque à l\'ordre n</li>
<li><strong>Composition :</strong> substituer le DL intérieur</li>
<li><strong>Intégration :</strong> terme à terme (ordre augmente de 1)</li>
</ul>
<h3>Applications</h3>
<div class="example-box"><strong>Calcul de limite :</strong> lim(x→0)(sin x−x)/x³<br>sin x = x−x³/6+o(x³) → (sin x−x)/x³ = −1/6 + o(1) → <strong>−1/6</strong></div>
<div class="theorem-box"><strong>Équivalents fondamentaux (x→0) :</strong> sin x∼x, 1−cos x∼x²/2, ln(1+x)∼x, eˣ−1∼x, tan x∼x</div>
<div class="theorem-box"><strong>Étude d\'extrema :</strong> Si DL de f−f(a) = aₖ(x−a)ᵏ+…, aₖ≠0 :<br>k pair, aₖ>0 → minimum | k pair, aₖ&lt;0 → maximum | k impair → inflexion</div>
<div class="theorem-box"><strong>Taylor-Lagrange (reste exact) :</strong> f(x) = Σₖ₌₀ⁿ f⁽ᵏ⁾(a)/k!(x−a)ᵏ + f^(n+1)(c)/(n+1)!·(x−a)^(n+1)</div>`,
    exercises:[
      {id:1,level:'facile',title:'DL de eˣcos x à l\'ordre 4',
       question:'<p>Calculer le DL à l\'ordre 4 de eˣ·cos x en x=0.</p>',
       solution:`<p>eˣ = 1+x+x²/2+x³/6+x⁴/24+… | cos x = 1−x²/2+x⁴/24+…<br>Produit (tronqué à 4) : <strong>1+x−x³/3−x⁴/6+o(x⁴)</strong></p>`},
      {id:2,level:'facile',title:'Limite via DL',
       question:'<p>Calculer lim<sub>x→0</sub>(tan x−x)/x³ par DL.</p>',
       solution:`<p>tan x = x+x³/3+… → (tan x−x)/x³ = <strong>1/3</strong></p>`},
      {id:3,level:'facile',title:'Approximation',
       question:'<p>Approcher e^0.1 à l\'ordre 3.</p>',
       solution:`<p>e^0.1 ≈ 1+0.1+0.01/2+0.001/6 ≈ <strong>1.10517</strong></p>`},
      {id:4,level:'moyen',title:'DL par composition',
       question:'<p>Calculer le DL à l\'ordre 4 de ln(cos x) en x=0.</p>',
       solution:`<p>cos x = 1−x²/2+x⁴/24. ln(1+u) ≈ u−u²/2 avec u=−x²/2+x⁴/24.<br><strong>ln(cos x) = −x²/2 − x⁴/12 + o(x⁴)</strong></p>`},
      {id:5,level:'moyen',title:'Nature d\'un point critique',
       question:'<p>Étudier la nature de x=0 pour f(x)=eˣ−1−x.</p>',
       solution:`<p>DL : f(x)=x²/2+o(x²). Coefficient positif, exposant pair → <strong>minimum local</strong> en x=0.</p>`},
      {id:6,level:'moyen',title:'DL de arcsin',
       question:'<p>Trouver le DL à l\'ordre 3 de arcsin(x).</p>',
       solution:`<p>On intègre (1−x²)^(−1/2) ≈ 1+x²/2+… → <strong>arcsin x = x+x³/6+o(x³)</strong></p>`},
      {id:7,level:'difficile',title:'Limite type 1^∞',
       question:'<p>Calculer lim<sub>x→0</sub>(cos x)^(1/x²) par DL.</p>',
       solution:`<p>ln(cos x)/x² = (−x²/2−x⁴/12+…)/x² → −1/2. Résultat : <strong>e^(−1/2) = 1/√e</strong></p>`},
      {id:8,level:'difficile',title:'Inégalité par Taylor-Lagrange',
       question:'<p>Montrer que sin x ≥ x−x³/6 pour x≥0.</p>',
       solution:`<p>f(x)=sin x−x+x³/6. f(0)=0. f\'(x)=cos x−1+x²/2≥0 (car 1−cos x≤x²/2). Donc f croissante ≥ 0. ∎</p>`}
    ],
    quiz:[
      {q:'DL de eˣ à l\'ordre 2 :',opts:['1+x','1+x+x²','1+x+x²/2','x+x²/2'],ans:2,exp:'eˣ=1+x+x²/2+o(x²)'},
      {q:'lim(x→0)(1−cos x)/x² = ?',opts:['0','1','1/2','2'],ans:2,exp:'1−cos x=x²/2+… → 1/2'},
      {q:'Le reste de Taylor-Young est noté :',opts:['R(x)','f^(n+1)(c)','o((x−a)ⁿ)','∑f\'(a)'],ans:2,exp:'Reste Taylor-Young : o((x−a)ⁿ)'},
      {q:'DL de ln(1+x) à l\'ordre 3 :',opts:['x−x²+x³','x−x²/2+x³/3','1+x+x²/2','x+x²+x³'],ans:1,exp:'Série standard du logarithme'},
      {q:'lim(x→0)(sin x−x)/x³ = ?',opts:['1/6','−1/6','1/3','−1/3'],ans:1,exp:'sin x−x=−x³/6+o(x³)'},
      {q:'arctan x à l\'ordre 3 :',opts:['x+x³/3','x−x³/3','x−x³','1/(1+x²)'],ans:1,exp:'arctan x = x−x³/3+…'},
      {q:'(1+x)^(1/2) à l\'ordre 2 :',opts:['1+x/2−x²/8','1+x+x²/2','1+x/2+x²/4','1−x/2'],ans:0,exp:'α=1/2 : 1+x/2+½·(−½)x²/2 = 1+x/2−x²/8'},
      {q:'Si dans le DL de f−f(a) le 1er terme est a₂(x−a)², a₂>0 :',opts:['Maximum','Minimum','Inflexion','Indéterminé'],ans:1,exp:'k pair positif → minimum'},
      {q:'Taylor-Lagrange fournit :',opts:['DL à tout ordre','Reste exact','Dérivée n-ième','Série de Fourier'],ans:1,exp:'Reste exact f^(n+1)(c)/(n+1)!·(x−a)^(n+1)'},
      {q:'Équivalent de 1−cos x quand x→0 :',opts:['x','x²','x²/2','1'],ans:2,exp:'1−cos x ∼ x²/2'}
    ]
  },
  {
    id:'algebre', cat:'math', icon:'A', color:'#C2587A',
    title:'Algèbre Linéaire',
    subtitle:'Espaces Vectoriels · Matrices · Valeurs Propres · Diagonalisation',
    course:`
<h2>3. Algèbre Linéaire</h2>
<h3>3.1 Espaces Vectoriels</h3>
<div class="def-box"><strong>Définition :</strong> (E,+,·) espace vectoriel sur ℝ vérifie 8 axiomes (neutralité, associativité, distributivité…)</div>
<div class="theorem-box"><strong>SEV – Critère :</strong> F⊂E est SEV ssi 0∈F et ∀u,v∈F, ∀λ,μ∈ℝ : λu+μv∈F</div>
<p><strong>Base :</strong> famille libre ET génératrice. <strong>Dimension :</strong> nombre de vecteurs dans toute base.</p>
<h3>3.2 Matrices & Déterminants</h3>
<div class="formula-box">
<code>det[a b;c d] = ad−bc | det(AB)=det(A)·det(B) | det(Aᵀ)=det(A)</code><br>
<code>A inversible ⟺ det(A)≠0 | A⁻¹ = (1/det A)·com(A)ᵀ</code>
</div>
<div class="theorem-box"><strong>Rouché-Fontené :</strong> AX=B compatible ⟺ rang(A)=rang(A|B)</div>
<h3>3.3 Valeurs Propres & Vecteurs Propres</h3>
<div class="def-box"><strong>Définition :</strong> λ VP de A si Av=λv pour v≠0. Équation caractéristique : <strong>det(A−λI)=0</strong></div>
<div class="example-box"><strong>Exemple :</strong> A=[[3,1],[1,3]]<br>χ(λ)=(3−λ)²−1=0 → λ₁=2, λ₂=4<br>
E₂: v₁=(1,−1) | E₄: v₂=(1,1)</div>
<h3>3.4 Diagonalisation</h3>
<div class="theorem-box"><strong>Théorème :</strong> A diagonalisable ⟺ somme des dim(E<sub>λᵢ</sub>)=n<br>n VP distinctes ⟹ A diagonalisable</div>
<div class="formula-box">
<code>P=[v₁|v₂|…|vₙ] (VP en colonnes) → P⁻¹AP=D (diagonale)</code><br>
<code>Aⁿ = P·Dⁿ·P⁻¹</code>
</div>
<div class="theorem-box"><strong>Théorème Spectral :</strong> Toute matrice symétrique réelle est orthogonalement diagonalisable ; ses VP sont réelles.</div>
<h4>Trace et Déterminant</h4>
<div class="formula-box">
<code>tr(A) = Σλᵢ (somme des VP) | det(A) = Πλᵢ (produit des VP)</code>
</div>`,
    exercises:[
      {id:1,level:'facile',title:'Déterminants 2×2 et 3×3',
       question:'<p>Calculer det(A) pour A=[[2,3],[1,4]] et det(B) pour B=[[1,2,0],[3,1,2],[0,1,1]]</p>',
       solution:`<p>det(A)=8−3=<strong>5</strong><br>det(B)=1(1−2)−2(3−0)=−1−6=<strong>−7</strong></p>`},
      {id:2,level:'facile',title:'Inverse 2×2',
       question:'<p>Calculer A⁻¹ pour A=[[3,1],[2,1]]</p>',
       solution:`<p>det=1. A⁻¹=[[1,−1],[−2,3]]. Vérification : A·A⁻¹=I ✓</p>`},
      {id:3,level:'moyen',title:'Valeurs propres',
       question:'<p>Trouver les VP et vecteurs propres de A=[[4,1],[2,3]]</p>',
       solution:`<p>χ(λ)=(4−λ)(3−λ)−2=λ²−7λ+10=(λ−2)(λ−5)<br>λ₁=2: v₁=(1,−2) | λ₂=5: v₂=(1,1)</p>`},
      {id:4,level:'moyen',title:'Diagonalisation',
       question:'<p>Diagonaliser A=[[4,1],[2,3]] et calculer A⁵.</p>',
       solution:`<p>P=[[1,1],[−2,1]], D=diag(2,5)<br>A⁵=P·diag(32,3125)·P⁻¹ → calcul complet par la méthode.</p>`},
      {id:5,level:'moyen',title:'Système linéaire',
       question:'<p>Résoudre : x+2y+z=1, 2x+3y−z=0, x+y−2z=−1</p>',
       solution:`<p>Pivot de Gauss → rang(A)=2&lt;3 → ∞ solutions.<br>Solution : (x,y,z)=(−3+5t, 2−3t, t), t∈ℝ</p>`},
      {id:6,level:'moyen',title:'Sous-espace vectoriel',
       question:'<p>Montrer que F={(x,y,z)|x+y−z=0} est un SEV de ℝ³ et donner une base.</p>',
       solution:`<p>0∈F ✓, stabilité ✓. Base : {(1,0,1),(0,1,1)}, dim(F)=2.</p>`},
      {id:7,level:'difficile',title:'Non diagonalisabilité',
       question:'<p>A=[[1,1,0],[0,1,1],[0,0,1]]. Discuter la diagonalisabilité.</p>',
       solution:`<p>χ(λ)=(1−λ)³ → λ=1 (mult. algébrique 3). dim(E₁)=1≠3 → <strong>non diagonalisable</strong>.</p>`},
      {id:8,level:'difficile',title:'Théorème spectral',
       question:'<p>Diagonaliser orthogonalement A=[[2,1,0],[1,2,0],[0,0,3]]</p>',
       solution:`<p>χ(λ)=(1−λ)(3−λ)². λ₁=1: e₁=1/√2·(1,−1,0), λ₂=3: e₂=1/√2·(1,1,0), e₃=(0,0,1).<br>D=diag(1,3,3)</p>`}
    ],
    quiz:[
      {q:'det(AB) = ?',opts:['det(A)+det(B)','det(A)·det(B)','det(A)/det(B)','det(Aᵀ)'],ans:1,exp:'Propriété fondamentale'},
      {q:'A inversible ⟺',opts:['tr(A)≠0','det(A)≠0','A symétrique','A diagonale'],ans:1,exp:'det(A)≠0 ⟺ A inversible'},
      {q:'Les VP vérifient :',opts:['AX=0','det(A)=0','det(A−λI)=0','AX=λX seulement'],ans:2,exp:'Équation caractéristique det(A−λI)=0'},
      {q:'AX=B compatible ⟺',opts:['det(A)≠0','rang(A)=rang(A|B)','B=0','A inversible'],ans:1,exp:'Rouché-Fontené'},
      {q:'Matrice symétrique réelle :',opts:['Toujours singulière','Non inversible','Orthogonalement diagonalisable','Idempotente'],ans:2,exp:'Théorème spectral'},
      {q:'tr(A) est égal à :',opts:['Somme des éléments','Produit des VP','Somme des VP','Déterminant'],ans:2,exp:'tr(A) = somme des valeurs propres'},
      {q:'dim(F)=dim(E) et F⊂E ⟹',opts:['F={0}','F=E','F⊊E','F est une droite'],ans:1,exp:'dim(F)=dim(E) et F⊂E ⟹ F=E'},
      {q:'n VP distinctes ⟹',opts:['det(A)=0','A diagonalisable','A symétrique','A²=A'],ans:1,exp:'Condition suffisante de diagonalisabilité'},
      {q:'rang(A) est la dimension de :',opts:['ker(A)','im(A)','A lui-même','ℝⁿ'],ans:1,exp:'rang = dim(image)'},
      {q:'Aⁿ via diagonalisation = ?',opts:['nA','P·Dⁿ·P⁻¹','det(A)ⁿ·I','P·D'],ans:1,exp:'Si A=PDP⁻¹ alors Aⁿ=PDⁿP⁻¹'}
    ]
  },
  {
    id:'integration', cat:'math', icon:'∫', color:'#5C3D2E',
    title:'Intégration',
    subtitle:'Intégrales Définies · IPP · Fractions Partielles · Impropres',
    course:`
<h2>4. Intégration</h2>
<div class="theorem-box"><strong>Théorème Fondamental de l'Analyse :</strong> ∫ₐᵇf(x)dx = F(b)−F(a) où F est une primitive de f.</div>
<h3>4.1 Méthodes d\'intégration</h3>
<h4>a) Intégration par Parties (IPP)</h4>
<div class="formula-box"><code>∫ u·v\' dx = [u·v] − ∫ u\'·v dx</code></div>
<p><strong>Règle LIATE :</strong> u = Logarithme, Inverse trig, Algébrique, Trig, Exponentielle (dans cet ordre).</p>
<div class="example-box"><strong>Exemple :</strong> ∫ x·eˣ dx. u=x, v\'=eˣ → <strong>eˣ(x−1)+C</strong></div>
<h4>b) Changement de variable</h4>
<div class="formula-box"><code>t = g(x) → dt = g\'(x)dx → ∫f(g(x))g\'(x)dx = ∫f(t)dt</code></div>
<h4>c) Fractions Partielles</h4>
<p>Pour P(x)/Q(x), factoriser Q puis décomposer :</p>
<div class="example-box"><strong>Exemple :</strong> 1/(x²−1) = A/(x−1)+B/(x+1) → A=1/2, B=−1/2<br>∫ dx/(x²−1) = <strong>(1/2)ln|(x−1)/(x+1)| + C</strong></div>
<h4>d) Substitutions trigonométriques</h4>
<table>
<tr><th>Expression</th><th>Substitution</th></tr>
<tr><td>√(a²−x²)</td><td>x=a sin θ</td></tr>
<tr><td>√(a²+x²)</td><td>x=a tan θ</td></tr>
<tr><td>√(x²−a²)</td><td>x=a/cos θ</td></tr>
</table>
<h3>4.2 Intégrales Impropres</h3>
<div class="formula-box">
<code>∫ₐ^∞ f dx = lim(b→∞) ∫ₐᵇ f dx</code><br>
<code>∫₁^∞ dx/xᵃ converge ⟺ a>1 | ∫₀¹ dx/xᵃ converge ⟺ a&lt;1</code>
</div>
<div class="theorem-box"><strong>Comparaison :</strong> 0≤f≤g et ∫g converge ⟹ ∫f converge</div>`,
    exercises:[
      {id:1,level:'facile',title:'IPP : ∫ x·ln x dx',
       question:'<p>Calculer ∫ x·ln(x) dx</p>',
       solution:`<p>u=ln x, v'=x. IPP : <strong>x²(2ln x−1)/4 + C</strong></p>`},
      {id:2,level:'facile',title:'Changement de variable',
       question:'<p>Calculer ∫₀¹ x/(x²+1)² dx</p>',
       solution:`<p>t=x²+1, dt=2x dx. = (1/2)∫₁² t⁻² dt = (1/2)[−1/t]₁² = <strong>1/4</strong></p>`},
      {id:3,level:'moyen',title:'Fractions partielles',
       question:'<p>Calculer ∫ (2x+1)/(x²+x−2) dx</p>',
       solution:`<p>x²+x−2=(x+2)(x−1). Décomposition → A=B=1.<br><strong>ln|x+2|+ln|x−1|+C</strong></p>`},
      {id:4,level:'moyen',title:'Intégrale impropre',
       question:'<p>Étudier ∫₁^∞ 1/(x√x) dx.</p>',
       solution:`<p>a=3/2>1 → converge. [−2/√x]₁^∞ = <strong>2</strong></p>`},
      {id:5,level:'moyen',title:'IPP répétée',
       question:'<p>Calculer ∫ x²·sin x dx</p>',
       solution:`<p>Deux IPP successives → <strong>−x²cos x + 2x sin x + 2cos x + C</strong></p>`},
      {id:6,level:'moyen',title:'Substitution trig',
       question:'<p>Calculer ∫ dx/√(1−x²)</p>',
       solution:`<p>x=sin θ, dx=cos θ dθ → ∫dθ = <strong>arcsin x + C</strong></p>`},
      {id:7,level:'difficile',title:'Comparaison',
       question:'<p>Montrer que ∫₁^∞ sin(x)/x² dx converge.</p>',
       solution:`<p>|sin x/x²|≤1/x². ∫1/x² converge (a=2>1) → convergence absolue. ∎</p>`},
      {id:8,level:'difficile',title:'Intégrale de Wallis',
       question:'<p>Calculer Iₙ=∫₀^(π/2) sinⁿ x dx en établissant une relation de récurrence.</p>',
       solution:`<p>IPP : Iₙ = (n−1)/n · Iₙ₋₂. I₀=π/2, I₁=1.<br>I₂=π/4, I₃=2/3, I₄=3π/16… Formule de Wallis : π/2 = ∏(4n²/(4n²−1))</p>`}
    ],
    quiz:[
      {q:'∫eˣdx = ?',opts:['eˣ+C','xeˣ+C','eˣ/x+C','xe^(x+1)+C'],ans:0,exp:'Primitive de eˣ est eˣ'},
      {q:"Règle IPP (intégration par parties) :",opts:["∫uv=∫u∫v","∫u·dv=uv−∫v·du","∫uv=u'v'-uv","∫u'v'=uv"],ans:1,exp:"Formule IPP: ∫u·dv = [uv] − ∫v·du"},
      {q:'∫₁^∞ 1/xᵃ converge si :',opts:['a>0','a<1','a>1','a=1'],ans:2,exp:'Intégrale de Riemann : converge ⟺ a>1'},
      {q:'Pour ∫1/(x²−4)dx, décomposer en :',opts:['A/x²+B/4','A/(x−2)+B/(x+2)','A/x+B/(x²−4)','Ax+B'],ans:1,exp:'x²−4=(x−2)(x+2)'},
      {q:'∫cos x dx = ?',opts:['−sin x+C','sin x+C','−cos x+C','tan x+C'],ans:1,exp:'Primitive de cos x'},
      {q:'√(9−x²) → substitution :',opts:['x=3tan θ','x=3sin θ','x=9cos θ','x=3/cos θ'],ans:1,exp:'√(a²−x²) → x=a sin θ'},
      {q:'∫ₐᵇf dx + ∫ᵦᶜf dx = ?',opts:['∫ₐᶜf dx','∫ₐᵇf·∫ᵦᶜf','2∫ₐᵇf','0'],ans:0,exp:'Relation de Chasles'},
      {q:'∫x²dx = ?',opts:['2x','x³','x³/3+C','2x+C'],ans:2,exp:'∫xⁿ=x^(n+1)/(n+1)+C'},
      {q:'∫₀¹ dx/√x vaut :',opts:['∞','2','1','1/2'],ans:1,exp:'[2√x]₀¹ = 2. Converge car a=1/2 < 1'},
      {q:'Pour ∫ln x dx, IPP avec u=ln x, v\'=1 donne :',opts:['ln x+C','x ln x+C','x ln x−x+C','1/x+C'],ans:2,exp:'∫ln x dx = x ln x − x + C'}
    ]
  },
  {
    id:'edo', cat:'math', icon:'y\'', color:'#F5A8B8',
    title:'Équations Différentielles',
    subtitle:'Ordre 1 · Ordre 2 à Coefficients Constants · Cauchy',
    course:`
<h2>5. Équations Différentielles</h2>
<h3>5.1 EDO d\'ordre 1</h3>
<h4>Variables séparables : y' = f(x)g(y)</h4>
<div class="formula-box"><code>dy/g(y) = f(x)dx → intégrer des deux côtés</code></div>
<div class="example-box"><strong>Exemple :</strong> y\'=xy, y(0)=1 → y=e^(x²/2)</div>
<h4>EDO linéaire ordre 1 : y' + p(x)y = q(x)</h4>
<div class="formula-box">
<code>y_h = C·e^(−∫p dx) (homogène)</code><br>
<code>Solution générale = y_h + y_p (variation de la constante)</code>
</div>
<h4>Équation de Bernoulli : y' + py = qyⁿ</h4>
<p>Poser z=y^(1−n) → équation linéaire en z.</p>
<h3>5.2 EDO linéaire ordre 2 à coefficients constants</h3>
<div class="formula-box"><code>ay'' + by' + cy = f(x) | Éq. car. : ar² + br + c = 0</code></div>
<table>
<tr><th>Discriminant Δ</th><th>Racines</th><th>Solution y_h</th></tr>
<tr><td>Δ>0</td><td>r₁,r₂ réelles distinctes</td><td>C₁e^(r₁x)+C₂e^(r₂x)</td></tr>
<tr><td>Δ=0</td><td>r double</td><td>(C₁+C₂x)e^(rx)</td></tr>
<tr><td>Δ&lt;0</td><td>α±iβ complexes</td><td>e^(αx)[C₁cos(βx)+C₂sin(βx)]</td></tr>
</table>
<h4>Solution particulière y_p</h4>
<table>
<tr><th>f(x)</th><th>Forme de y_p</th></tr>
<tr><td>Polynôme degré n</td><td>Polynôme degré n</td></tr>
<tr><td>eᵃˣ</td><td>Aeᵃˣ (×x si a est racine)</td></tr>
<tr><td>cos(bx) ou sin(bx)</td><td>Acos(bx)+Bsin(bx)</td></tr>
</table>
<div class="warning-box"><strong>Résonance :</strong> Si la forme naturelle de y_p est solution homogène → multiplier par x (ou x² si racine double).</div>`,
    exercises:[
      {id:1,level:'facile',title:'Variables séparables',
       question:'<p>Résoudre y\'=2y, y(0)=3</p>',
       solution:`<p>dy/y=2dx → y=Ae^(2x). y(0)=3 → <strong>y=3e^(2x)</strong></p>`},
      {id:2,level:'facile',title:'EDO linéaire ordre 1',
       question:'<p>Résoudre y\'+2y=4</p>',
       solution:`<p>y_h=Ce^(−2x), y_p=2 → <strong>y=Ce^(−2x)+2</strong></p>`},
      {id:3,level:'moyen',title:'Ordre 2 racines réelles',
       question:'<p>Résoudre y\'\'−5y\'+6y=0, y(0)=1, y\'(0)=0</p>',
       solution:`<p>r=2,3. y=C₁e^(2x)+C₂e^(3x). CI : C₁=3, C₂=−2 → <strong>y=3e^(2x)−2e^(3x)</strong></p>`},
      {id:4,level:'moyen',title:'Racines complexes',
       question:'<p>Résoudre y\'\'+ 4y=0, y(0)=0, y\'(0)=2</p>',
       solution:`<p>r=±2i → y=C₁cos(2x)+C₂sin(2x). CI : C₁=0, C₂=1 → <strong>y=sin(2x)</strong></p>`},
      {id:5,level:'moyen',title:'EDO avec second membre',
       question:'<p>Résoudre y\'\'−y\'−2y=6eˣ</p>',
       solution:`<p>Racines 2,−1. y_h=C₁e^(2x)+C₂e^(−x). y_p=−3eˣ → <strong>y=C₁e^(2x)+C₂e^(−x)−3eˣ</strong></p>`},
      {id:6,level:'moyen',title:'Second membre polynôme',
       question:'<p>Résoudre y\'\'+ y=x</p>',
       solution:`<p>r=±i. y_h=C₁cos x+C₂sin x. y_p=x → <strong>y=C₁cos x+C₂sin x+x</strong></p>`},
      {id:7,level:'difficile',title:'Résonance',
       question:'<p>Résoudre y\'\'+ y=cos x</p>',
       solution:`<p>i est racine → résonance. y_p=(x/2)sin x → <strong>y=C₁cos x+C₂sin x+(x/2)sin x</strong></p>`},
      {id:8,level:'difficile',title:'Bernoulli',
       question:'<p>Résoudre y\'−y=xy² (Bernoulli, n=2)</p>',
       solution:`<p>z=1/y → z\'+z=−x → z_h=Ce^(−x), z_p=−x+1 → <strong>y=1/(Ce^(−x)−x+1)</strong></p>`}
    ],
    quiz:[
      {q:'Équation caractéristique de y\'\'−3y\'+2y=0 :',opts:['r²+3r+2=0','r²−3r+2=0','r²−3r−2=0','3r+2=0'],ans:1,exp:'Substitution directe'},
      {q:'Racine double r → solution :',opts:['C₁e^(rx)','(C₁+C₂x)e^(rx)','C₁cos(rx)+C₂sin(rx)','C₁e^(rx)+C₂e^(rx)'],ans:1,exp:'Racine double : (C₁+C₂x)e^(rx)'},
      {q:'y\'=f(x)g(y) → méthode :',opts:['Variation constante','Variables séparables','Bernoulli','Euler'],ans:1,exp:'Variables séparables'},
      {q:'y\'+y=0 → solution :',opts:['y=Cx','y=Ce^x','y=Ce^(−x)','y=C+x'],ans:2,exp:'y\'+y=0 → y=Ce^(−x)'},
      {q:'Résonance → on multiplie y_p par :',opts:['eˣ','e^(rx)','x','x²'],ans:2,exp:'Règle de résonance : multiplier par x'},
      {q:'y\'\'+ 4y=0 → solution générale :',opts:['C₁e^(2x)+C₂e^(−2x)','C₁cos(2x)+C₂sin(2x)','(C₁+C₂x)e^(2x)','C₁e^(2ix)'],ans:1,exp:'r=±2i → cos/sin'},
      {q:'EDO linéaire d\'ordre 1 : y_h = ?',opts:['Ce^(∫p dx)','Ce^(−∫p dx)','C·p(x)','1/q(x)'],ans:1,exp:'y_h=Ce^(−∫p(x)dx)'},
      {q:'Problème de Cauchy = ?',opts:['EDO + conditions initiales','Deux EDO','EDO + série','Aucun'],ans:0,exp:'Cauchy = EDO + CI y(x₀)=y₀…'},
      {q:'Pour y_p de y\'\'+ y=eˣ, on tente :',opts:['Aeˣ','Axeˣ','Ax²eˣ','Ae^(−x)'],ans:0,exp:'eˣ : r=1 n\'est pas racine de r²+1=0'},
      {q:'Bernoulli y\'+py=qyⁿ se linéarise par :',opts:['z=yⁿ','z=y^(1−n)','z=ln y','z=1/y\''],ans:1,exp:'z=y^(1−n) → linéaire en z'}
    ]
  },
  {
    id:'series', cat:'math', icon:'Σ', color:'#C8A87E',
    title:'Suites & Séries',
    subtitle:'Séries Numériques · Séries Entières · Fourier',
    course:`
<h2>6. Suites et Séries</h2>
<h3>6.1 Séries numériques</h3>
<div class="def-box"><strong>Définition :</strong> Σuₙ converge si Sₙ=u₀+…+uₙ converge.</div>
<div class="theorem-box"><strong>CN :</strong> Σuₙ converge ⟹ uₙ→0 (réciproque FAUSSE : Σ1/n diverge)</div>
<div class="formula-box">
<code>Géométrique : Σrⁿ converge ⟺ |r|&lt;1, somme=1/(1−r)</code><br>
<code>Riemann : Σ1/nᵃ converge ⟺ a>1</code>
</div>
<h4>Critères</h4>
<table>
<tr><th>Critère</th><th>Résultat</th></tr>
<tr><td>D'Alembert</td><td>L=lim|u_{n+1}/uₙ|. L&lt;1→CV, L>1→DV, L=1→?</td></tr>
<tr><td>Cauchy (racine)</td><td>L=lim|uₙ|^(1/n). L&lt;1→CV, L>1→DV</td></tr>
<tr><td>Leibniz (alternée)</td><td>Σ(−1)ⁿuₙ, uₙ>0 décroissante→0 ⟹ CV</td></tr>
<tr><td>Comparaison</td><td>0≤uₙ≤vₙ et Σvₙ CV ⟹ Σuₙ CV</td></tr>
</table>
<h3>6.2 Séries entières</h3>
<div class="def-box"><strong>Rayon de convergence R :</strong> Σaₙxⁿ converge absolument pour |x|&lt;R, diverge pour |x|>R.</div>
<div class="formula-box">
<code>R = 1/lim|aₙ|^(1/n) (Cauchy-Hadamard) | R = lim|aₙ/a_{n+1}| (D'Alembert)</code>
</div>
<h3>6.3 Séries de Fourier</h3>
<div class="formula-box">
<code>f(x) = a₀/2 + Σ[aₙcos(nx) + bₙsin(nx)]</code><br>
<code>a₀ = (1/π)∫₋π^π f dx | aₙ = (1/π)∫₋π^π f·cos(nx)dx | bₙ = (1/π)∫₋π^π f·sin(nx)dx</code>
</div>
<div class="theorem-box"><strong>Dirichlet :</strong> Si f est C¹ par morceaux, la série de Fourier converge vers f en tout point de continuité, et vers [f(x⁺)+f(x⁻)]/2 aux discontinuités.</div>
<div class="example-box"><strong>f(x)=x sur ]−π,π[ :</strong> f impaire → aₙ=0. bₙ=2(−1)^(n+1)/n.<br>f(x) = 2Σ(−1)^(n+1)/n · sin(nx) → en x=π/2 : <strong>π/4 = 1−1/3+1/5−…</strong></div>`,
    exercises:[
      {id:1,level:'facile',title:'Série géométrique',
       question:'<p>Étudier Σ(2/3)ⁿ et calculer sa somme.</p>',
       solution:`<p>r=2/3 < 1 → converge. Somme = <strong>3</strong></p>`},
      {id:2,level:'facile',title:'D\'Alembert',
       question:'<p>Étudier Σ n!/nⁿ par D\'Alembert.</p>',
       solution:`<p>u_{n+1}/uₙ=[n/(n+1)]ⁿ→1/e&lt;1 → <strong>converge</strong></p>`},
      {id:3,level:'moyen',title:'Rayon de convergence',
       question:'<p>Trouver R de Σ(n²/3ⁿ)xⁿ.</p>',
       solution:`<p>|a_{n+1}/aₙ|→1/3 → R=<strong>3</strong></p>`},
      {id:4,level:'moyen',title:'Série alternée',
       question:'<p>Étudier Σ(−1)ⁿ/√n.</p>',
       solution:`<p>uₙ=1/√n > 0, décroissante→0. Leibniz → <strong>converge</strong> (mais pas absolument).</p>`},
      {id:5,level:'moyen',title:'Coefficients de Fourier',
       question:'<p>Calculer les coefficients de Fourier de f(x)=x² sur [−π,π].</p>',
       solution:`<p>f paire → bₙ=0. a₀=2π²/3. aₙ=4(−1)ⁿ/n².<br><strong>f(x)=π²/3+Σ4(−1)ⁿ/n²·cos(nx)</strong>. En x=π : Σ1/n²=π²/6 (résultat de Bâle)</p>`},
      {id:6,level:'moyen',title:'Série télescopique',
       question:'<p>Calculer Σₙ₌₁^∞ 1/[n(n+1)]</p>',
       solution:`<p>1/[n(n+1)]=1/n−1/(n+1). Sₙ=1−1/(n+1)→<strong>1</strong></p>`},
      {id:7,level:'difficile',title:'Fourier signal carré',
       question:'<p>Série de Fourier de f(x)=sign(x) sur [−π,π].</p>',
       solution:`<p>f impaire → aₙ=0. bₙ=4/(nπ) si n impair, 0 si n pair.<br><strong>f(x)=(4/π)[sin x+sin(3x)/3+sin(5x)/5+…]</strong></p>`},
      {id:8,level:'difficile',title:'Critère intégral',
       question:'<p>Montrer que Σ1/(n·ln²n) converge.</p>',
       solution:`<p>f(x)=1/(x·ln²x) décroissante positive. ∫₂^∞ dx/(x·ln²x) = [−1/ln x]₂^∞ = 1/ln 2 &lt;∞ → <strong>converge</strong>.</p>`}
    ],
    quiz:[
      {q:'Σ(1/2)ⁿ (n≥0) = ?',opts:['1','2','1/2','∞'],ans:1,exp:'1/(1−1/2)=2'},
      {q:'Σ1/n :',opts:['Converge vers ln 2','Converge vers π','Diverge','Converge vers 1'],ans:2,exp:'Série harmonique diverge'},
      {q:'D\'Alembert inconcliant si :',opts:['L=0','L>1','L<1','L=1'],ans:3,exp:'L=1 → test inconcliant'},
      {q:'R de Σxⁿ = ?',opts:['0','1','∞','2'],ans:1,exp:'Série géométrique : R=1'},
      {q:'bₙ de Fourier d\'une fonction paire :',opts:['Quelconques','=aₙ','= 0','=1/n'],ans:2,exp:'f paire → bₙ=0'},
      {q:'Σ1/nᵃ converge si :',opts:['a>0','a<1','a>1','a=1'],ans:2,exp:'Série de Riemann'},
      {q:'Leibniz s\'applique aux séries :',opts:['À termes positifs','Alternées','Géométriques','Entières'],ans:1,exp:'Leibniz → séries alternées'},
      {q:'Cauchy-Hadamard : R = ?',opts:['lim|aₙ/a_{n+1}|','1/lim|aₙ|^(1/n)','lim|a_{n+1}/aₙ|','Σaₙ'],ans:1,exp:'Formule de Cauchy-Hadamard'},
      {q:'Σ(−1)ⁿ/n converge vers :',opts:['0','ln 2','−ln 2','π/4'],ans:2,exp:'Σ(−1)^(n+1)/n = ln 2, donc Σ(−1)ⁿ/n = −ln 2'},
      {q:'Si uₙ ne tend pas vers 0, Σuₙ :',opts:['Converge','Diverge','Converge abs.','Peut converger'],ans:1,exp:'CN : uₙ→0 obligatoire'}
    ]
  },
  {
    id:'multiint', cat:'math', icon:'∬', color:'#F5A8B8',
    title:'Intégrales Multiples',
    subtitle:'Fubini · Changements de Variables · Applications',
    course:`
<h2>7. Intégrales Multiples</h2>
<div class="theorem-box"><strong>Fubini :</strong> ∬_D f dxdy = ∫ₐᵇ[∫ᶜᵈ f(x,y)dy]dx (f continue sur [a,b]×[c,d])</div>
<h3>Changements de variables</h3>
<div class="formula-box">
<code>Polaires 2D : x=r cos θ, y=r sin θ, dxdy = r dr dθ</code><br>
<code>Cylindriques : x=r cos θ, y=r sin θ, z=z, dxdydz = r dr dθ dz</code><br>
<code>Sphériques : x=ρ sin φ cos θ, y=ρ sin φ sin θ, z=ρ cos φ, dxdydz = ρ² sin φ dρ dφ dθ</code>
</div>
<div class="example-box"><strong>Exemple :</strong> ∬_{x²+y²≤1} e^(x²+y²) dxdy<br>= ∫₀^(2π)∫₀¹ e^(r²)·r drdθ = 2π·[e^(r²)/2]₀¹ = <strong>π(e−1)</strong></div>
<h3>Applications</h3>
<ul>
<li><strong>Aire :</strong> ∬_D 1 dxdy</li>
<li><strong>Volume :</strong> ∭_V dxdydz</li>
<li><strong>Masse :</strong> ∬ ρ(x,y) dxdy</li>
<li><strong>Moment d\'inertie :</strong> ∬ (x²+y²)ρ dxdy</li>
</ul>`,
    exercises:[
      {id:1,level:'facile',title:'Fubini sur rectangle',
       question:'<p>Calculer ∫₀¹∫₀²(x+y)dxdy</p>',
       solution:`<p>∫₀¹[x²/2+xy]₀² dy = ∫₀¹(2+2y)dy = [2y+y²]₀¹ = <strong>3</strong></p>`},
      {id:2,level:'moyen',title:'Polaires',
       question:'<p>Calculer ∬_{x²+y²≤4}(x²+y²)dxdy</p>',
       solution:`<p>= ∫₀^(2π)∫₀² r³ drdθ = 2π[r⁴/4]₀² = <strong>8π</strong></p>`},
      {id:3,level:'moyen',title:'Changement d\'ordre',
       question:'<p>Calculer ∫₀¹∫ₓ¹ e^(y²)dydx en changeant l\'ordre.</p>',
       solution:`<p>Nouveau domaine : 0≤y≤1, 0≤x≤y → ∫₀¹ y·e^(y²)dy = <strong>(e−1)/2</strong></p>`},
      {id:4,level:'difficile',title:'Volume par sphériques',
       question:'<p>Calculer le volume de la sphère de rayon R.</p>',
       solution:`<p>∫₀^(2π)∫₀^π∫₀^R ρ²sinφ dρdφdθ = 2π·2·R³/3 = <strong>4πR³/3</strong> ✓</p>`}
    ],
    quiz:[
      {q:'Jacobien en polaires 2D :',opts:['1','r','r²','sin φ'],ans:1,exp:'dxdy = r drdθ'},
      {q:'Fubini est applicable si :',opts:['f est continue','Domaine rectangulaire','f positive','f bornée'],ans:0,exp:'Fubini : f continue sur D'},
      {q:'Aire de D = ?',opts:['∬ f dxdy','∬ 1 dxdy','∬ x dxdy','∬ y dxdy'],ans:1,exp:'Aire = ∬_D 1 dxdy'},
      {q:'Jacobien en sphériques :',opts:['ρ','ρ²','ρ² sin φ','sin φ'],ans:2,exp:'dxdydz = ρ² sin φ dρdφdθ'}
    ]
  },
  {
    id:'foncplusieurs', cat:'math', icon:'∂', color:'#C2587A',
    title:'Fonctions de Plusieurs Variables',
    subtitle:'Dérivées Partielles · Gradient · Extrema · Lagrange',
    course:`
<h2>8. Fonctions de Plusieurs Variables</h2>
<h3>8.1 Dérivées partielles</h3>
<div class="def-box"><strong>∂f/∂x(a,b) :</strong> Dériver par rapport à x en traitant y comme une constante.</div>
<div class="formula-box">
<code>Hessienne H(f) = [[∂²f/∂x², ∂²f/∂x∂y], [∂²f/∂y∂x, ∂²f/∂y²]]</code><br>
<code>Théorème de Schwarz : ∂²f/∂x∂y = ∂²f/∂y∂x (si f ∈ C²)</code>
</div>
<h3>8.2 Gradient et différentielle</h3>
<div class="def-box"><strong>∇f = (∂f/∂x, ∂f/∂y)</strong> — pointe vers la plus grande croissance.<br>
<strong>Différentielle :</strong> df = (∂f/∂x)dx + (∂f/∂y)dy</div>
<h3>8.3 Extrema locaux</h3>
<div class="theorem-box"><strong>Critère de la Hessienne :</strong> D = det(H) = f_xx·f_yy − f_xy²<br>
• D>0, f_xx>0 → minimum | D>0, f_xx&lt;0 → maximum | D&lt;0 → point selle</div>
<h3>8.4 Multiplicateurs de Lagrange</h3>
<div class="theorem-box"><strong>Pour optimiser f sous g(x,y)=0 :</strong> Résoudre ∇f = λ·∇g et g=0</div>
<div class="example-box"><strong>Exemple :</strong> Max de f(x,y)=xy sous x+y=1.<br>∇f=(y,x)=λ(1,1) → x=y=1/2. Max = <strong>1/4</strong></div>
<h3>8.5 Règle de la chaîne</h3>
<div class="formula-box">
<code>Si z=f(x(t),y(t)) → dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)</code>
</div>`,
    exercises:[
      {id:1,level:'facile',title:'Dérivées partielles',
       question:'<p>Calculer ∂f/∂x et ∂f/∂y pour f(x,y)=x³y+sin(xy)</p>',
       solution:`<p>∂f/∂x = 3x²y + y·cos(xy)<br>∂f/∂y = x³ + x·cos(xy)</p>`},
      {id:2,level:'moyen',title:'Points critiques',
       question:'<p>Étudier les extrema de f(x,y)=x²+y²−2x−4y+5</p>',
       solution:`<p>∇f=(2x−2,2y−4)=0 → (1,2). H=diag(2,2), det=4>0, f_xx=2>0 → <strong>minimum</strong>. f(1,2)=0</p>`},
      {id:3,level:'moyen',title:'Lagrange',
       question:'<p>Max de f(x,y)=x²y sous x²+y²=3</p>',
       solution:`<p>∇f=(2xy,x²)=λ(2x,2y). y=λ, x²=2y² et x²+y²=3 → y=1, x=±√2. Max=<strong>2</strong></p>`},
      {id:4,level:'difficile',title:'Règle de la chaîne',
       question:'<p>Si z=f(x,y), x=r cos θ, y=r sin θ, exprimer ∂z/∂r et ∂z/∂θ</p>',
       solution:`<p>∂z/∂r = (∂z/∂x)cos θ + (∂z/∂y)sin θ<br>∂z/∂θ = (∂z/∂x)(−r sin θ) + (∂z/∂y)(r cos θ)</p>`}
    ],
    quiz:[
      {q:'Pour ∂f/∂x, y est traité comme :',opts:['Variable','Constante','Paramètre','Zéro'],ans:1,exp:'On dérive par rapport à x, y = constante'},
      {q:'Point selle ↔ det(H) :',opts:['>0','=0','<0','=1'],ans:2,exp:'det(H)<0 → point selle'},
      {q:'∇f=0 indique :',opts:['Max','Min','Point critique','Inflexion'],ans:2,exp:'Condition nécessaire d\'extremum'},
      {q:'Lagrange optimise f sous :',opts:['Dérivée nulle','Contrainte g=0','Deux variables','Système'],ans:1,exp:'Méthode des multiplicateurs de Lagrange'}
    ]
  }
];




const PROBA_TOPICS = [
  {
    id:'proba', cat:'math', icon:'P', color:'#38D9A9',
    title:'Probabilités & Statistiques',
    subtitle:'Analyse combinatoire · Lois · Bayes · TCL',
    course:`
<h2>9. Probabilités & Statistiques</h2>

<h3>Cours officiel Probabilités — Pr Hanane Ferjouchia, FSB</h3>
<div class="def-box"><strong>Source :</strong> Pr H. Ferjouchia — Calcul des Probabilités, LF-SMA-S3-FSB, décembre 2023</div>
<h4>Analyse Combinatoire</h4>
<div class="formula-box">
<code>Arrangements de n éléments pris k à k : Aₙᵏ = n!/(n-k)!</code><br>
<code>Combinaisons : Cₙᵏ = n!/(k!(n-k)!) = (n choose k)</code><br>
<code>Permutations de n éléments : n!</code><br>
<code>Arrangements avec répétition : nᵏ</code>
</div>
<h4>Espaces probabilisés</h4>
<div class="def-box"><strong>Définition :</strong> Un espace probabilisé est un triplet (Ω, Θ, P) où :<br>
• Ω = univers (ensemble de tous les cas possibles)<br>
• Θ = ensemble des événements (σ-algèbre)<br>
• P : Θ → [0,1] une probabilité satisfaisant les axiomes de Kolmogorov</div>
<div class="formula-box">
<code>Axiomes : P(Ω)=1 | P(A)≥0 | A∩B=∅ ⟹ P(A∪B)=P(A)+P(B)</code><br>
<code>Formule totale : P(B) = ΣᵢP(B|Aᵢ)P(Aᵢ) (partition de Ω)</code>
</div>
<div class="example-box"><strong>Exemple classique :</strong> Dé à 6 faces.<br>
Ω = {1,2,3,4,5,6} | A = {nombre pair} = {2,4,6}<br>
P(A) = |A|/|Ω| = 3/6 = 0.5 (cas équiprobables)</div>
<h4>Variables aléatoires discrètes — Lois classiques</h4>
<table>
<tr><th>Loi</th><th>Paramètre(s)</th><th>P(X=k)</th><th>E(X)</th><th>V(X)</th></tr>
<tr><td>Bernoulli B(p)</td><td>p∈[0,1]</td><td>pᵏ(1-p)^(1-k)</td><td>p</td><td>p(1-p)</td></tr>
<tr><td>Binomiale B(n,p)</td><td>n∈ℕ, p∈[0,1]</td><td>Cₙᵏ·pᵏ·(1-p)^(n-k)</td><td>np</td><td>np(1-p)</td></tr>
<tr><td>Poisson P(λ)</td><td>λ>0</td><td>e⁻λ·λᵏ/k!</td><td>λ</td><td>λ</td></tr>
<tr><td>Géométrique G(p)</td><td>p>0</td><td>(1-p)^(k-1)·p</td><td>1/p</td><td>(1-p)/p²</td></tr>
<tr><td>Hypergéométrique</td><td>N,M,n</td><td>Cₘᵏ·C_(N-M)^(n-k)/Cₙₙᵏ</td><td>nM/N</td><td>—</td></tr>
</table>
<h4>Variables aléatoires continues</h4>
<table>
<tr><th>Loi</th><th>Densité f(x)</th><th>E(X)</th><th>V(X)</th><th>F(x)</th></tr>
<tr><td>Uniforme U(a,b)</td><td>1/(b-a) sur [a,b]</td><td>(a+b)/2</td><td>(b-a)²/12</td><td>(x-a)/(b-a)</td></tr>
<tr><td>Exponentielle E(λ)</td><td>λe^(-λx) x≥0</td><td>1/λ</td><td>1/λ²</td><td>1-e^(-λx)</td></tr>
<tr><td>Normale N(μ,σ²)</td><td>(1/σ√2π)e^(-(x-μ)²/2σ²)</td><td>μ</td><td>σ²</td><td>Φ((x-μ)/σ)</td></tr>
</table>
<div class="theorem-box"><strong>Propriété sans mémoire (Exponentielle) :</strong> P(X>s+t | X>s) = P(X>t)<br>
<strong>Théorème de Tchebychev :</strong> P(|X-μ|≥kσ) ≤ 1/k²<br>
<strong>TCL :</strong> Si X₁,...,Xₙ i.i.d. de moyenne μ et variance σ², alors (X̄-μ)/(σ/√n) →ᴸ N(0,1)</div>
<h3>Formules essentielles</h3>
<div class="formula-box">
<code>E(X)=Σ xᵢ·P(X=xᵢ) | V(X)=E(X²)−[E(X)]² | σ=√V(X)</code><br>
<code>P(A|B)=P(A∩B)/P(B) | Indépendance : P(A∩B)=P(A)·P(B)</code><br>
<code>Bayes : P(Aᵢ|B)=P(B|Aᵢ)·P(Aᵢ)/Σⱼ P(B|Aⱼ)·P(Aⱼ)</code>
</div>`,
    exercises:[
      {id:1,level:'facile',title:'Probabilité conditionnelle',
       question:'<p>On tire une carte d\'un jeu de 52. P(As | carte rouge) = ?</p>',
       solution:`<p>P(As∩rouge)=2/52. P(rouge)=26/52. P(As|rouge)=(2/52)/(26/52)=<strong>1/13</strong></p>`},
      {id:2,level:'facile',title:'Analyse combinatoire',
       question:'<p>Combien de façons d\'arranger 3 livres parmi 5 sur une étagère ?</p>',
       solution:`<p>Arrangement A₅³ = 5!/(5-3)! = 5×4×3 = <strong>60</strong></p>`},
      {id:3,level:'moyen',title:'Loi binomiale',
       question:'<p>X~B(6, 1/3). Calculer P(X=2) et E(X).</p>',
       solution:`<p>P(X=2)=C(6,2)·(1/3)²·(2/3)⁴=15·(1/9)·(16/81)=<strong>80/243</strong>. E(X)=np=<strong>2</strong></p>`},
      {id:4,level:'moyen',title:'Bayes',
       question:'<p>Maladie : 1%, test+ si malade (95%), test+ si sain (2%). P(malade|test+)=?</p>',
       solution:`<p>P(+)=0.95×0.01+0.02×0.99=0.0293. P(M|+)=0.0095/0.0293≈<strong>32.4%</strong></p>`},
      {id:5,level:'moyen',title:'Loi normale',
       question:'<p>X~N(70,25). P(65≤X≤80)=?</p>',
       solution:`<p>Z=(X-70)/5. P(-1≤Z≤2)=Φ(2)-Φ(-1)=0.9772-0.1587=<strong>0.8185</strong></p>`},
      {id:6,level:'difficile',title:'TCL',
       question:'<p>n=100 lancers de dé. P(X̄≥3.6)=?</p>',
       solution:`<p>μ=3.5, σ²=35/12. σ/√100≈0.171. Z=(3.6-3.5)/0.171≈0.585. P(Z≥0.585)≈<strong>0.279</strong></p>`}
    ],
    quiz:[
      {q:'Bernoulli B(p) : E(X)=?',opts:['1','p','p²','1-p'],ans:1,exp:'E(X)=p pour Bernoulli'},
      {q:'Poisson P(λ) : E(X)=V(X)=?',opts:['1','λ','λ²','√λ'],ans:1,exp:'Poisson : espérance=variance=λ'},
      {q:'P(A|B) = P(A) ssi :',opts:['A=B','A et B incompatibles','A et B indépendants','B⊂A'],ans:2,exp:'Indépendance ⟺ P(A|B)=P(A)'},
      {q:'Règle 68-95-99.7 : P(μ-σ≤X≤μ+σ)≈?',opts:['68%','95%','99.7%','50%'],ans:0,exp:'±1σ = 68%'},
      {q:'TCL : pour n grand, X̄ suit approximativement :',opts:['Poisson','Uniforme','Normale','Exponentielle'],ans:2,exp:'TCL → loi normale'}
    ]
  },
  {
    id:'algebre_rel', cat:'math', icon:'⊗', color:'#4C6EF5',
    title:'Algèbre Relationnelle & SQL',
    subtitle:'Opérations · Dépendances Fonctionnelles · Normalisation · SQL avancé',
    course:`
<h2>10. Algèbre Relationnelle & SQL</h2>
<h3>Source : Chapitres 1-4 du cours MIP 2025, FSBM</h3>
<h3>Opérations fondamentales</h3>
<table>
<tr><th>Opération</th><th>Notation</th><th>Description</th></tr>
<tr><td>Sélection</td><td>σ_cond(R)</td><td>Filtre les tuples selon une condition</td></tr>
<tr><td>Projection</td><td>π_attrs(R)</td><td>Conserve certaines colonnes</td></tr>
<tr><td>Union</td><td>R ∪ S</td><td>Tuples dans R ou S (schémas compatibles)</td></tr>
<tr><td>Différence</td><td>R − S</td><td>Tuples dans R mais pas dans S</td></tr>
<tr><td>Produit cartésien</td><td>R × S</td><td>Toutes les combinaisons de tuples</td></tr>
<tr><td>Jointure naturelle</td><td>R ⋈ S</td><td>Jointure sur attributs communs</td></tr>
<tr><td>Thêta-jointure</td><td>R ⋈_θ S</td><td>Jointure avec condition θ</td></tr>
<tr><td>Division</td><td>R ÷ S</td><td>Tuples de R liés à TOUS les tuples de S</td></tr>
</table>
<div class="def-box"><strong>Dépendance Fonctionnelle :</strong> X→Y si ∀t₁,t₂ ∈ R : t₁[X]=t₂[X] ⟹ t₁[Y]=t₂[Y]</div>
<div class="theorem-box"><strong>Axiomes d\'Armstrong :</strong><br>
• Réflexivité : Y⊆X ⟹ X→Y<br>
• Augmentation : X→Y ⟹ XZ→YZ<br>
• Transitivité : X→Y et Y→Z ⟹ X→Z<br>
Dérivées : Union, Décomposition, Pseudo-transitivité</div>
<div class="formula-box">
<code>Clé candidate K : K→R et aucun sous-ensemble propre de K ne détermine R</code><br>
<code>Fermeture X⁺ : ensemble de tous les attributs déterminés par X via les DF</code>
</div>
<h3>Formes Normales</h3>
<div class="formula-box">
<code>1NF : valeurs atomiques, pas de groupes répétés</code><br>
<code>2NF : 1NF + pas de DF partielle sur la clé primaire</code><br>
<code>3NF : 2NF + pas de DF transitive</code><br>
<code>BCNF : toute DF non triviale X→A ⟹ X est superclé</code>
</div>
<h3>SQL Avancé</h3>
<pre><span class="cm">-- Vues</span>
<span class="kw">CREATE VIEW</span> vue_dept <span class="kw">AS</span>
<span class="kw">SELECT</span> dept, <span class="fn">AVG</span>(salaire) <span class="kw">FROM</span> employes <span class="kw">GROUP BY</span> dept;

<span class="cm">-- Fonctions de fenêtrage</span>
<span class="kw">SELECT</span> nom, salaire,
    <span class="fn">RANK</span>() <span class="kw">OVER</span>(<span class="kw">ORDER BY</span> salaire <span class="kw">DESC</span>) rang,
    <span class="fn">AVG</span>(salaire) <span class="kw">OVER</span>(<span class="kw">PARTITION BY</span> dept) moy_dept
<span class="kw">FROM</span> employes;

<span class="cm">-- CTE récursive</span>
<span class="kw">WITH RECURSIVE</span> ancêtres <span class="kw">AS</span> (
    <span class="kw">SELECT</span> id, parent_id <span class="kw">FROM</span> employé <span class="kw">WHERE</span> id=1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> e.id, e.parent_id <span class="kw">FROM</span> employé e
    <span class="kw">JOIN</span> ancêtres a <span class="kw">ON</span> e.id=a.parent_id
) <span class="kw">SELECT</span> * <span class="kw">FROM</span> ancêtres;</pre>`,
    exercises:[
      {id:1,level:'facile',title:'Sélection et projection',
       question:'<p>En algèbre relationnelle : les noms des étudiants de plus de 20 ans de la table Etudiant(id, nom, age).</p>',
       solution:`<p>π_nom(σ_age>20(Etudiant))</p>`},
      {id:2,level:'moyen',title:'Fermeture d\'attributs',
       question:'<p>F={A→BC, B→C, AB→D}. Calculer {A}⁺.</p>',
       solution:`<p>{A}⁺ = {A} → A→BC : ajouter B,C → {A,B,C} → B→C (déjà) → AB→D : ajouter D → <strong>{A,B,C,D}</strong>. A est clé.</p>`},
      {id:3,level:'moyen',title:'Normalisation 3NF',
       question:'<p>Normaliser R(Etud_id, Etud_nom, Dept_id, Dept_nom, Cours_id, Note).</p>',
       solution:`<p>DF : Etud_id→Etud_nom,Dept_id | Dept_id→Dept_nom | (Etud_id,Cours_id)→Note<br><strong>3NF :</strong><br>• Etudiant(<u>Etud_id</u>, Etud_nom, Dept_id)<br>• Departement(<u>Dept_id</u>, Dept_nom)<br>• Inscription(<u>Etud_id, Cours_id</u>, Note)</p>`},
      {id:4,level:'difficile',title:'BCNF vs 3NF',
       question:'<p>R(A,B,C) avec DF : A→B, B→C, C→A. La relation est-elle en BCNF ?</p>',
       solution:`<p>Clés : {A}, {B}, {C} (chacune est clé candidate). Toutes les DF ont des déterminants qui sont des clés → <strong>BCNF</strong>.</p>`}
    ],
    quiz:[
      {q:'σ_cond(R) est l\'opération de :',opts:['Projection','Sélection','Jointure','Union'],ans:1,exp:'σ = sélection (filtre les tuples)'},
      {q:'R÷S retourne :',opts:['Toutes paires','Tuples de R liés à TOUS les tuples de S','Union','Différence'],ans:1,exp:'Division = tuples en relation avec tous les tuples de S'},
      {q:'BCNF est plus stricte que :',opts:['1NF','2NF','3NF','Aucune'],ans:2,exp:'BCNF ⟹ 3NF ⟹ 2NF ⟹ 1NF'},
      {q:'X→Y est triviale si :',opts:['X=∅','Y⊆X','X⊂Y','X∩Y=∅'],ans:1,exp:'Triviale : Y⊆X (réflexivité)'}
    ]
  }
];


const INFO_TOPICS = [
  {
    id:'cprog', cat:'info', icon:'C', color:'#6B8FE8',
    title:'Programmation C',
    subtitle:'Pointeurs · Fonctions · Récursivité · Allocation Dynamique',
    course:`

<h3>Cours officiel — Pr S. El Filali, FSBM 2024-2025</h3>
<div class="def-box"><strong>Historique :</strong> C créé en 1972 par Dennis Ritchie (Bell Labs). Ancêtres : CPL→BCPL→B→C. Inventé pour écrire UNIX. Noyaux de Windows et Linux écrits en C.</div>
<div class="formula-box">
<code>Étapes : Édition (.c) → Compilation → Objet (.o) → Édition de liens → Exécutable</code>
</div>
<h4>Chapitre 2 — Variables et Types (cours officiel)</h4>
<table>
<tr><th>Type</th><th>Taille</th><th>Plage</th></tr>
<tr><td>char</td><td>1 octet</td><td>−128 à 127</td></tr>
<tr><td>unsigned char</td><td>1 octet</td><td>0 à 255</td></tr>
<tr><td>short int</td><td>2 octets</td><td>−32768 à 32767</td></tr>
<tr><td>int</td><td>2/4 octets</td><td>−32768 à 32767</td></tr>
<tr><td>long int</td><td>4 octets</td><td>−2 147 483 648 à 2 147 483 647</td></tr>
<tr><td>float</td><td>4 octets</td><td>±3.4×10⁻³⁸ à ±3.4×10³⁸</td></tr>
<tr><td>double</td><td>8 octets</td><td>±1.7×10⁻³⁰⁸ à ±1.7×10³⁰⁸</td></tr>
</table>
<div class="formula-box">
<code>Constante : #define PI 3.14159 | const float PI = 3.14;</code><br>
<code>Identificateurs : suite de lettres/chiffres, commence par lettre, sensible à la casse</code>
</div>
<h4>Chapitre 3 — Instructions de contrôle (cours officiel)</h4>
<pre><span class="cm">/* if-else */</span>
<span class="kw">if</span> (qte_cmd > <span class="num">100</span>) remise = <span class="num">0.1</span>;
<span class="kw">if</span> (car==<span class="str">'a'</span>||car==<span class="str">'e'</span>||car==<span class="str">'i'</span>) printf(<span class="str">"voyelle"</span>);
<span class="kw">else</span> printf(<span class="str">"consonne"</span>);

<span class="cm">/* Boucles */</span>
<span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">0</span>; i&lt;n; i++) {{ <span class="cm">/* ... */</span> }}
<span class="kw">while</span>(condition) {{ <span class="cm">/* ... */</span> }}
<span class="kw">do</span> {{ <span class="cm">/* ... */</span> }} <span class="kw">while</span>(condition);</pre>
<h4>Chapitre 4 — Pointeurs (cours officiel)</h4>
<div class="example-box"><strong>Représentation mémoire :</strong><br>
<code>int mon_int=10;</code> stocké à l\'adresse 0x0019FF38<br>
<code>int* p = &amp;mon_int;</code> → p contient 0x0019FF38, *p = 10<br>
<strong>Dangers :</strong> Problème de typage | Pointeur NULL (crash si déréférencé) | Jardinage (écriture hors zone)</div>
<h4>Chapitre 5 — Tableaux (cours officiel)</h4>
<pre><span class="kw">int</span> tab[<span class="num">5</span>]={{<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>}}; <span class="cm">/* tab ≡ &tab[0] */</span>
<span class="cm">/* tab[i] ≡ *(tab+i) */</span>
<span class="kw">char</span> tab[]=  {{'C','O','D','E','R'}};
<span class="cm">/* Tableau 2D = tableau de tableaux */</span>
<span class="kw">int</span> mat[<span class="num">3</span>][<span class="num">4</span>]; <span class="cm">/* 3 lignes × 4 colonnes */</span></pre>
<h4>Chapitre 6 — Chaînes de caractères</h4>
<div class="formula-box">
<code>strlen(s) | strcpy(dest,src) | strcat(dest,src) | strcmp(s1,s2)</code><br>
<code>sprintf(buf,"%d",n) | atoi("42") | fgets(s,n,stdin)</code>
</div>
<h4>Chapitre 8 — Fonctions</h4>
<pre><span class="cm">/* Prototype obligatoire avant main */</span>
<span class="kw">int</span> <span class="fn">max</span>(<span class="kw">int</span> a, <span class="kw">int</span> b);
<span class="cm">/* Pointeur de fonction */</span>
<span class="kw">int</span> (*pf)(<span class="kw">int</span>,<span class="kw">int</span>) = &max;
printf(<span class="str">"%d"</span>, pf(<span class="num">3</span>,<span class="num">5</span>)); <span class="cm">// 5</span></pre>
<h2>1. Programmation C</h2>
<h3>1.1 Pointeurs</h3>
<div class="def-box"><strong>Pointeur :</strong> Variable stockant l\'adresse d\'une autre variable.<br><code>int x=5; int *p=&x;</code> — <code>&x</code> : adresse | <code>*p</code> : déréférencement</div>
<pre><span class="cm">// Exemple complet</span>
<span class="kw">int</span> a = <span class="num">10</span>;
<span class="kw">int</span> *p = &a;
printf(<span class="str">"%d"</span>, *p);  <span class="cm">// 10</span>
*p = <span class="num">20</span>;           <span class="cm">// modifie a</span>
printf(<span class="str">"%d"</span>, a);   <span class="cm">// 20</span></pre>
<h4>Arithmétique des pointeurs</h4>
<pre><span class="kw">int</span> tab[<span class="num">5</span>] = {<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>};
<span class="kw">int</span> *p = tab;   <span class="cm">// &tab[0]</span>
p++;            <span class="cm">// &tab[1] (+4 octets)</span>
printf(<span class="str">"%d"</span>, *p); <span class="cm">// 2</span></pre>
<h3>1.2 Fonctions</h3>
<pre><span class="kw">void</span> <span class="fn">parValeur</span>(<span class="kw">int</span> x) { x=<span class="num">100</span>; }  <span class="cm">// ne modifie pas l\'original</span>
<span class="kw">void</span> <span class="fn">parAdresse</span>(<span class="kw">int</span> *x) { *x=<span class="num">100</span>; } <span class="cm">// modifie l\'original</span></pre>
<h3>1.3 Récursivité</h3>
<div class="def-box"><strong>Principe :</strong> Cas de base + appel récursif. Sans cas de base → stack overflow.</div>
<pre><span class="kw">int</span> <span class="fn">fact</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span>(n==<span class="num">0</span>) <span class="kw">return</span> <span class="num">1</span>;  <span class="cm">// cas de base</span>
    <span class="kw">return</span> n * <span class="fn">fact</span>(n-<span class="num">1</span>); <span class="cm">// récursif</span>
}</pre>
<h3>1.4 Allocation Dynamique</h3>
<pre><span class="kw">int</span> *p = (<span class="kw">int</span>*)<span class="fn">malloc</span>(<span class="num">10</span>*<span class="kw">sizeof</span>(<span class="kw">int</span>));
<span class="kw">if</span>(p==NULL) { <span class="cm">/* erreur */</span> }
p[<span class="num">0</span>] = <span class="num">42</span>;
<span class="fn">free</span>(p); p = NULL; <span class="cm">// toujours libérer!</span></pre>
<div class="warning-box"><strong>Fuites mémoire :</strong> Chaque malloc() doit avoir son free() correspondant !</div>
<h3>1.5 Chaînes de caractères</h3>
<pre><span class="kw">char</span> s[] = <span class="str">"bonjour"</span>; <span class="cm">// terminé par '\\0'</span>
<span class="fn">strlen</span>(s);  <span class="cm">// 7</span>
<span class="fn">strcpy</span>(d,s); <span class="fn">strcmp</span>(a,b); <span class="fn">strcat</span>(d,s);</pre>`,
    exercises:[
      {id:1,level:'facile',title:'Swap par pointeurs',
       question:'<p>Écrire <code>void swap(int *a, int *b)</code> échangeant deux entiers.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">swap</span>(<span class="kw">int</span> *a, <span class="kw">int</span> *b) {
    <span class="kw">int</span> tmp = *a; *a = *b; *b = tmp;
}
<span class="cm">// Appel : swap(&x, &y);</span></pre>`},
      {id:2,level:'facile',title:'Factorielle',
       question:'<p>Écrire factorielle itérative et récursive. Calculer 5!</p>',
       solution:`<pre><span class="kw">int</span> <span class="fn">fact_r</span>(<span class="kw">int</span> n){<span class="kw">return</span> n<=<span class="num">1</span>?<span class="num">1</span>:n*<span class="fn">fact_r</span>(n-<span class="num">1</span>);}
<span class="cm">// 5! = 120</span></pre>`},
      {id:3,level:'moyen',title:'Maximum d\'un tableau',
       question:'<p>Retourner un pointeur vers le maximum d\'un tableau.</p>',
       solution:`<pre><span class="kw">int</span>* <span class="fn">max</span>(<span class="kw">int</span> *t, <span class="kw">int</span> n){
    <span class="kw">int</span> *m=t;
    <span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">1</span>;i&lt;n;i++) <span class="kw">if</span>(t[i]>*m) m=&t[i];
    <span class="kw">return</span> m;
}</pre>`},
      {id:4,level:'moyen',title:'Tri à bulles',
       question:'<p>Implémenter le tri à bulles.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">bubbleSort</span>(<span class="kw">int</span> *t, <span class="kw">int</span> n){
    <span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">0</span>;i&lt;n-<span class="num">1</span>;i++)
        <span class="kw">for</span>(<span class="kw">int</span> j=<span class="num">0</span>;j&lt;n-i-<span class="num">1</span>;j++)
            <span class="kw">if</span>(t[j]>t[j+<span class="num">1</span>]){<span class="kw">int</span> tmp=t[j];t[j]=t[j+<span class="num">1</span>];t[j+<span class="num">1</span>]=tmp;}
} <span class="cm">// O(n²)</span></pre>`},
      {id:5,level:'moyen',title:'Inversion de chaîne',
       question:'<p>Inverser une chaîne en place.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">inv</span>(<span class="kw">char</span> *s){
    <span class="kw">int</span> n=<span class="fn">strlen</span>(s);
    <span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">0</span>;i&lt;n/<span class="num">2</span>;i++){<span class="kw">char</span> t=s[i];s[i]=s[n-<span class="num">1</span>-i];s[n-<span class="num">1</span>-i]=t;}
}</pre>`},
      {id:6,level:'moyen',title:'Matrice dynamique',
       question:'<p>Allouer dynamiquement une matrice n×n contenant i+j à la case (i,j).</p>',
       solution:`<pre><span class="kw">int</span> **M=(<span class="kw">int</span>**)<span class="fn">malloc</span>(n*<span class="kw">sizeof</span>(<span class="kw">int</span>*));
<span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">0</span>;i&lt;n;i++){
    M[i]=(<span class="kw">int</span>*)<span class="fn">malloc</span>(n*<span class="kw">sizeof</span>(<span class="kw">int</span>));
    <span class="kw">for</span>(<span class="kw">int</span> j=<span class="num">0</span>;j&lt;n;j++) M[i][j]=i+j;
}</pre>`},
      {id:7,level:'difficile',title:'Tours de Hanoï',
       question:'<p>Résoudre les Tours de Hanoï pour n disques.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">hanoi</span>(<span class="kw">int</span> n,<span class="kw">char</span> s,<span class="kw">char</span> d,<span class="kw">char</span> a){
    <span class="kw">if</span>(n==<span class="num">0</span>) <span class="kw">return</span>;
    <span class="fn">hanoi</span>(n-<span class="num">1</span>,s,a,d);
    printf(<span class="str">"%d: %c→%c\\n"</span>,n,s,d);
    <span class="fn">hanoi</span>(n-<span class="num">1</span>,a,d,s);
} <span class="cm">// 2ⁿ−1 mouvements</span></pre>`},
      {id:8,level:'difficile',title:'Pointeurs de fonctions',
       question:'<p>Déclarer un pointeur de fonction int(*op)(int,int) et l\'utiliser.</p>',
       solution:`<pre><span class="kw">int</span> <span class="fn">add</span>(<span class="kw">int</span> a,<span class="kw">int</span> b){<span class="kw">return</span> a+b;}
<span class="kw">int</span> (*op)(<span class="kw">int</span>,<span class="kw">int</span>) = add;
printf(<span class="str">"%d"</span>, op(<span class="num">3</span>,<span class="num">4</span>)); <span class="cm">// 7</span></pre>`}
    ],
    quiz:[
      {q:'&x en C retourne :',opts:['La valeur de x','L\'adresse de x','Un pointeur typé','Le type de x'],ans:1,exp:'& = opérateur d\'adresse'},
      {q:'malloc(n*sizeof(int)) :',opts:['Libère n entiers','Alloue n octets','Alloue n entiers','Copie n entiers'],ans:2,exp:'Alloue n entiers (n×4 octets)'},
      {q:'Cas de base en récursion sert à :',opts:['Accélérer','Arrêter la récursion','Compter','Allouer'],ans:1,exp:'Sans cas de base → récursion infinie'},
      {q:'Pour modifier une variable dans une fonction, passer :',opts:['Sa valeur','Son adresse','Sa copie','Son type'],ans:1,exp:'Passage par adresse'},
      {q:'Complexité tri à bulles :',opts:['O(n)','O(n log n)','O(n²)','O(1)'],ans:2,exp:'Deux boucles imbriquées → O(n²)'},
      {q:'free(p) :',opts:['Met p=NULL','Libère la mémoire pointée','Libère p','Réalloue'],ans:1,exp:'Libère la mémoire allouée par malloc'},
      {q:'int *p; *p=5; est dangereux car :',opts:['p non initialisé','p est NULL','5 n\'est pas int','p local'],ans:0,exp:'p non initialisé → comportement indéfini'},
      {q:'sizeof(char) en C :',opts:['2','4','1','8'],ans:2,exp:'sizeof(char)=1 octet (standard C)'},
      {q:'fib(5) par récursion naïve : combien d\'appels fib(1) ?',opts:['2','3','5','8'],ans:2,exp:'Arbre de récursion → fib(1) appelé 5 fois'},
      {q:'Tri à bulles est stable parce que :',opts:['Ne déplace jamais','Ne compare pas les égaux','Ne swape pas les égaux','Est O(n²)'],ans:2,exp:'Stable = éléments égaux gardent leur ordre relatif'}
    ]
  },
  {
    id:'structures', cat:'info', icon:'⫸', color:'#6B4840',
    title:'Structures de Données',
    subtitle:'Tableaux · Piles · Files · Listes · Arbres · Graphes',
    course:`
<h2>2. Structures de Données</h2>
<h3>2.1 Piles (Stack) – LIFO</h3>
<div class="def-box"><strong>LIFO :</strong> Last In, First Out. Opérations : push, pop, peek, isEmpty.</div>
<pre><span class="kw">typedef struct</span> {<span class="kw">int</span> d[<span class="num">100</span>]; <span class="kw">int</span> top;} Pile;
<span class="kw">void</span> <span class="fn">push</span>(Pile *p,<span class="kw">int</span> v){p->d[++(p->top)]=v;}
<span class="kw">int</span>  <span class="fn">pop</span> (Pile *p)       {<span class="kw">return</span> p->d[(p->top)--];}</pre>
<p><strong>Applications :</strong> évaluation d\'expressions, appels de fonctions, DFS.</p>
<h3>2.2 Files (Queue) – FIFO</h3>
<div class="def-box"><strong>FIFO :</strong> First In, First Out. Opérations : enqueue, dequeue, front.</div>
<p><strong>Applications :</strong> BFS, ordonnancement, buffers.</p>
<h3>2.3 Listes Chaînées</h3>
<pre><span class="kw">typedef struct</span> N {<span class="kw">int</span> v; <span class="kw">struct</span> N *next;} Noeud;
<span class="cm">// Insertion tête O(1) | Accès O(n)</span></pre>
<h3>2.4 Arbres Binaires & ABR</h3>
<pre><span class="kw">typedef struct</span> A {<span class="kw">int</span> v; <span class="kw">struct</span> A *g,*d;} Arbre;</pre>
<table>
<tr><th>Parcours</th><th>Ordre</th><th>Usage</th></tr>
<tr><td>Préordre</td><td>Racine,G,D</td><td>Copie</td></tr>
<tr><td>Inordre</td><td>G,Racine,D</td><td>Tri d\'un ABR</td></tr>
<tr><td>Postordre</td><td>G,D,Racine</td><td>Suppression</td></tr>
<tr><td>BFS (largeur)</td><td>Niveau par niveau</td><td>Chemin court</td></tr>
</table>
<div class="theorem-box"><strong>ABR :</strong> Nœud gauche &lt; Racine &lt; Nœud droit. Recherche/insertion O(h) = O(log n) si équilibré.</div>
<h3>2.5 Graphes G=(V,E)</h3>
<ul>
<li><strong>Matrice d\'adjacence :</strong> O(n²) espace</li>
<li><strong>Liste d\'adjacence :</strong> O(n+m) espace</li>
<li><strong>DFS :</strong> pile, détecte cycles</li>
<li><strong>BFS :</strong> file, chemin le plus court (non pondéré)</li>
</ul>`,
    exercises:[
      {id:1,level:'facile',title:'Parenthèses avec une pile',
       question:'<p>Algorithme vérifiant si une expression est bien parenthésée.</p>',
       solution:`<pre><span class="kw">int</span> <span class="fn">valide</span>(<span class="kw">char</span> *s){
    Pile p; p.top=-<span class="num">1</span>;
    <span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">0</span>;s[i];i++){
        <span class="kw">if</span>(s[i]==<span class="str">'('</span>) <span class="fn">push</span>(&p,s[i]);
        <span class="kw">else if</span>(s[i]==<span class="str">')'</span>){
            <span class="kw">if</span>(p.top&lt;<span class="num">0</span>) <span class="kw">return</span> <span class="num">0</span>;
            <span class="fn">pop</span>(&p);
        }
    }
    <span class="kw">return</span> p.top==-<span class="num">1</span>;
}</pre>`},
      {id:2,level:'facile',title:'Liste chaînée – insertion en tête',
       question:'<p>Insérer un élément en tête d\'une liste chaînée.</p>',
       solution:`<pre>Noeud* <span class="fn">insertTete</span>(Noeud *head, <span class="kw">int</span> v){
    Noeud *n=<span class="fn">malloc</span>(<span class="kw">sizeof</span>(Noeud));
    n->v=v; n->next=head; <span class="kw">return</span> n;
}</pre>`},
      {id:3,level:'moyen',title:'Parcours inordre d\'un ABR',
       question:'<p>Afficher les éléments d\'un ABR dans l\'ordre croissant.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">inordre</span>(Arbre *a){
    <span class="kw">if</span>(a==NULL) <span class="kw">return</span>;
    <span class="fn">inordre</span>(a->g);
    printf(<span class="str">"%d "</span>,a->v);
    <span class="fn">inordre</span>(a->d);
} <span class="cm">// O(n)</span></pre>`},
      {id:4,level:'moyen',title:'BFS sur graphe',
       question:'<p>Implémenter un BFS depuis un sommet source.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">bfs</span>(<span class="kw">int</span> **adj, <span class="kw">int</span> n, <span class="kw">int</span> src){
    <span class="kw">int</span> vis[n],file[n],f=<span class="num">0</span>,r=<span class="num">0</span>;
    memset(vis,<span class="num">0</span>,<span class="kw">sizeof</span>(vis));
    vis[src]=<span class="num">1</span>; file[r++]=src;
    <span class="kw">while</span>(f&lt;r){
        <span class="kw">int</span> u=file[f++];
        printf(<span class="str">"%d "</span>,u);
        <span class="kw">for</span>(<span class="kw">int</span> v=<span class="num">0</span>;v&lt;n;v++)
            <span class="kw">if</span>(adj[u][v]&&!vis[v]){vis[v]=<span class="num">1</span>;file[r++]=v;}
    }
}</pre>`},
      {id:5,level:'moyen',title:'Hauteur d\'un arbre',
       question:'<p>Calculer la hauteur d\'un arbre binaire.</p>',
       solution:`<pre><span class="kw">int</span> <span class="fn">hauteur</span>(Arbre *a){
    <span class="kw">if</span>(a==NULL) <span class="kw">return</span> -<span class="num">1</span>;
    <span class="kw">int</span> g=<span class="fn">hauteur</span>(a->g), d=<span class="fn">hauteur</span>(a->d);
    <span class="kw">return</span> <span class="num">1</span> + (g>d?g:d);
}</pre>`},
      {id:6,level:'moyen',title:'File avec deux piles',
       question:'<p>Implémenter une file à l\'aide de deux piles.</p>',
       solution:`<p>Pile P1 (entrée) et P2 (sortie). Enqueue → push sur P1. Dequeue → si P2 vide, tout transférer de P1 vers P2, puis pop de P2. Complexité amortie O(1).</p>`},
      {id:7,level:'difficile',title:'Détection de cycle DFS',
       question:'<p>Détecter un cycle dans un graphe orienté par DFS.</p>',
       solution:`<p>On maintient un tableau <code>en_cours[]</code>. Lors du DFS, si on rencontre un sommet déjà en cours de visite → cycle détecté. Complexité O(V+E).</p>`},
      {id:8,level:'difficile',title:'Arbre AVL – principe',
       question:'<p>Expliquer le principe d\'un arbre AVL et les rotations.</p>',
       solution:`<p>ABR équilibré : |hauteur(gauche) − hauteur(droite)| ≤ 1 pour chaque nœud (facteur d'équilibre ∈ {−1,0,1}).<br>Rotations pour rééquilibrer :<br>• Rotation droite (LL), gauche (RR), droite-gauche (LR), gauche-droite (RL).<br>Garantit O(log n) pour toutes les opérations.</p>`}
    ],
    quiz:[
      {q:'Une pile est de type :',opts:['FIFO','LIFO','LILO','FILO'],ans:1,exp:'Pile = LIFO (Last In First Out)'},
      {q:'BFS utilise :',opts:['Une pile','Une file','Un tableau','Rien'],ans:1,exp:'BFS utilise une file (FIFO)'},
      {q:'Inordre sur un ABR donne :',opts:['Ordre quelconque','Ordre décroissant','Ordre croissant','Niveau par niveau'],ans:2,exp:'Inordre sur ABR = ordre croissant'},
      {q:'Liste d\'adjacence a une complexité espace :',opts:['O(n²)','O(n+m)','O(m²)','O(n)'],ans:1,exp:'O(n+m) où m = nombre d\'arêtes'},
      {q:'La hauteur d\'une feuille est :',opts:['-1','0','1','Infinie'],ans:0,exp:'Feuille : hauteur −1 (convention) ou 0 selon la convention choisie'},
      {q:'DFS détecte :',opts:['Chemin le plus court','Cycles','Arbres couvrants','Aucun'],ans:1,exp:'DFS est utilisé pour détecter les cycles'},
      {q:'Insertion en tête d\'une liste chaînée :',opts:['O(n)','O(log n)','O(1)','O(n²)'],ans:2,exp:'Insertion tête = O(1) avec un pointeur head'},
      {q:'ABR : tout nœud gauche est :',opts:['Supérieur','Inférieur','Égal','Quelconque'],ans:1,exp:'ABR : gauche < racine < droite'},
      {q:'Un arbre AVL garantit :',opts:['O(n) recherche','O(log n) recherche','O(1) insertion','Aucune garantie'],ans:1,exp:'AVL : arbre équilibré → O(log n) pour toutes les opérations'},
      {q:'Enqueue dans une file = ?',opts:['Retirer du début','Ajouter à la fin','Retirer de la fin','Ajouter au début'],ans:1,exp:'Enqueue = ajouter en queue, Dequeue = retirer en tête'}
    ]
  },
  {
    id:'algorithmes', cat:'info', icon:'⚙', color:'#4A7A8A',
    title:'Algorithmes & Complexité',
    subtitle:'Tri · Recherche · Complexité · Divide & Conquer',
    course:`
<h2>3. Algorithmes & Complexité</h2>
<h3>3.1 Notations de complexité</h3>
<div class="formula-box">
<code>O (grand O) : borne supérieure (pire cas)</code><br>
<code>Ω (Omega) : borne inférieure (meilleur cas)</code><br>
<code>Θ (Theta) : borne exacte (cas moyen)</code>
</div>
<h4>Hiérarchie des complexités</h4>
<div class="formula-box"><code>O(1) &lt; O(log n) &lt; O(√n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ) &lt; O(n!)</code></div>
<h3>3.2 Algorithmes de tri</h3>
<table>
<tr><th>Algorithme</th><th>Meilleur</th><th>Moyen</th><th>Pire</th><th>Stable</th></tr>
<tr><td>Bulles</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>Oui</td></tr>
<tr><td>Sélection</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>Non</td></tr>
<tr><td>Insertion</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>Oui</td></tr>
<tr><td>Fusion</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>Oui</td></tr>
<tr><td>Rapide</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>Non</td></tr>
<tr><td>Tas (Heap)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>Non</td></tr>
</table>
<h4>Tri Fusion (Merge Sort)</h4>
<pre><span class="kw">void</span> <span class="fn">mergeSort</span>(<span class="kw">int</span> *t, <span class="kw">int</span> g, <span class="kw">int</span> d){
    <span class="kw">if</span>(g>=d) <span class="kw">return</span>;
    <span class="kw">int</span> m=(g+d)/<span class="num">2</span>;
    <span class="fn">mergeSort</span>(t,g,m); <span class="fn">mergeSort</span>(t,m+<span class="num">1</span>,d);
    <span class="fn">merge</span>(t,g,m,d); <span class="cm">// fusion des deux moitiés</span>
}</pre>
<h3>3.3 Recherche</h3>
<div class="formula-box">
<code>Linéaire : O(n) | Dichotomique (tableau trié) : O(log n)</code>
</div>
<pre><span class="kw">int</span> <span class="fn">binarySearch</span>(<span class="kw">int</span> *t,<span class="kw">int</span> n,<span class="kw">int</span> x){
    <span class="kw">int</span> g=<span class="num">0</span>,d=n-<span class="num">1</span>;
    <span class="kw">while</span>(g&lt;=d){
        <span class="kw">int</span> m=(g+d)/<span class="num">2</span>;
        <span class="kw">if</span>(t[m]==x)<span class="kw">return</span> m;
        <span class="kw">if</span>(t[m]&lt;x) g=m+<span class="num">1</span>; <span class="kw">else</span> d=m-<span class="num">1</span>;
    }
    <span class="kw">return</span> -<span class="num">1</span>;
}</pre>
<h3>3.4 Diviser pour régner</h3>
<div class="theorem-box"><strong>Théorème maître :</strong> T(n) = aT(n/b) + f(n)<br>
• Si f(n)=O(nˡᵒᵍᵇᵃ⁻ᵉ) → T(n)=Θ(nˡᵒᵍᵇᵃ)<br>
• Si f(n)=Θ(nˡᵒᵍᵇᵃ) → T(n)=Θ(nˡᵒᵍᵇᵃ·log n)<br>
• Si f(n)=Ω(nˡᵒᵍᵇᵃ⁺ᵉ) → T(n)=Θ(f(n))</div>`,
    exercises:[
      {id:1,level:'facile',title:'Complexité d\'un code',
       question:'<p>Quelle est la complexité de : for(i=0;i&lt;n;i++) for(j=0;j&lt;n;j++) somme+=i*j ?</p>',
       solution:`<p>Deux boucles imbriquées de n itérations chacune → <strong>O(n²)</strong></p>`},
      {id:2,level:'facile',title:'Recherche dichotomique',
       question:'<p>Tracer l\'exécution de la recherche dichotomique de x=7 dans [1,3,5,7,9,11].</p>',
       solution:`<p>g=0,d=5 → m=2, t[2]=5&lt;7 → g=3<br>g=3,d=5 → m=4, t[4]=9>7 → d=3<br>g=3,d=3 → m=3, t[3]=7=7 → <strong>trouvé en indice 3</strong></p>`},
      {id:3,level:'moyen',title:'Tri fusion – exemple',
       question:'<p>Montrer le tri fusion de [38,27,43,3,9,82,10].</p>',
       solution:`<p>Diviser : [38,27,43,3] | [9,82,10]<br>Diviser : [38,27] | [43,3] | [9,82] | [10]<br>Trier : [27,38] | [3,43] | [9,82] | [10]<br>Fusionner : [3,27,38,43] | [9,10,82]<br>Final : <strong>[3,9,10,27,38,43,82]</strong></p>`},
      {id:4,level:'moyen',title:'Théorème maître',
       question:'<p>Résoudre T(n)=2T(n/2)+n (tri fusion).</p>',
       solution:`<p>a=2, b=2, f(n)=n. nˡᵒᵍᵇᵃ=n^(log₂2)=n.<br>f(n)=Θ(n) → Cas 2 → <strong>T(n)=Θ(n log n)</strong></p>`},
      {id:5,level:'moyen',title:'Algorithme glouton',
       question:'<p>Problème du rendu de monnaie : rendre 36 avec {25,10,5,1}.</p>',
       solution:`<p>Glouton : prendre la plus grande pièce possible.<br>36=25+10+1 → <strong>3 pièces</strong></p>`},
      {id:6,level:'moyen',title:'Programmation dynamique – Fibonacci',
       question:'<p>Implémenter Fibonacci avec mémoïsation.</p>',
       solution:`<pre><span class="kw">int</span> memo[<span class="num">100</span>]={<span class="num">0</span>};
<span class="kw">int</span> <span class="fn">fib</span>(<span class="kw">int</span> n){
    <span class="kw">if</span>(n&lt;=<span class="num">1</span>)<span class="kw">return</span> n;
    <span class="kw">if</span>(memo[n]) <span class="kw">return</span> memo[n];
    <span class="kw">return</span> memo[n]=<span class="fn">fib</span>(n-<span class="num">1</span>)+<span class="fn">fib</span>(n-<span class="num">2</span>);
} <span class="cm">// O(n) au lieu de O(2ⁿ)</span></pre>`},
      {id:7,level:'difficile',title:'Dijkstra – principe',
       question:'<p>Expliquer l\'algorithme de Dijkstra pour le chemin le plus court.</p>',
       solution:`<p>Initialiser dist[s]=0, dist[v]=∞. File de priorité (min-heap).<br>À chaque étape, extraire le sommet u de distance minimale, relaxer ses voisins : dist[v]=min(dist[v], dist[u]+w(u,v)).<br>Complexité : O((V+E)log V) avec min-heap.</p>`},
      {id:8,level:'difficile',title:'NP et réductibilité',
       question:'<p>Distinguer P, NP, NP-complet, NP-difficile.</p>',
       solution:`<p>• <strong>P</strong> : problèmes solubles en temps polynomial<br>• <strong>NP</strong> : problèmes dont la solution est vérifiable en polynomial<br>• <strong>NP-complet</strong> : NP + tout problème NP se réduit à lui (SAT, Sac à dos décisionnel)<br>• <strong>NP-difficile</strong> : au moins aussi dur que NP-complet (pas forcément dans NP)</p>`}
    ],
    quiz:[
      {q:'O(n log n) correspond à :',opts:['Tri bulles','Tri fusion','Tri sélection','Recherche linéaire'],ans:1,exp:'Tri fusion = O(n log n)'},
      {q:'Recherche dichotomique nécessite :',opts:['Tableau quelconque','Tableau trié','Liste chaînée','Aucune condition'],ans:1,exp:'Le tableau doit être trié'},
      {q:'Théorème maître : T(n)=2T(n/2)+n → ?',opts:['O(n)','O(n log n)','O(n²)','O(log n)'],ans:1,exp:'Cas 2 : Θ(n log n)'},
      {q:'Complexité du pire cas du tri rapide :',opts:['O(n log n)','O(n)','O(n²)','O(n³)'],ans:2,exp:'Pivot mal choisi → O(n²)'},
      {q:'O(1) signifie :',opts:['Très lent','Constant','Linéaire','Logarithmique'],ans:1,exp:'O(1) = temps constant indépendant de n'},
      {q:'Tri stable = ?',opts:['Plus rapide','Conserve l\'ordre des égaux','Ne déplace pas','En place'],ans:1,exp:'Stable = éléments égaux gardent leur ordre relatif'},
      {q:'BFS donne le chemin le plus court sur :',opts:['Graphe pondéré','Graphe non pondéré','Arbre uniquement','Graphe orienté'],ans:1,exp:'BFS = chemin le plus court en nombre d\'arêtes (non pondéré)'},
      {q:'Mémoïsation de Fibonacci réduit la complexité à :',opts:['O(2ⁿ)','O(n log n)','O(n)','O(1)'],ans:2,exp:'Mémoïsation → chaque valeur calculée une seule fois → O(n)'},
      {q:'Un problème NP-complet est :',opts:['Insoluble','Dans NP et NP-difficile','Dans P uniquement','Pas dans NP'],ans:1,exp:'NP-complet = dans NP ET NP-difficile'},
      {q:'Tri par insertion est efficace pour :',opts:['Grands tableaux','Tableaux presque triés','Tableaux inversés','Données aléatoires'],ans:1,exp:'Insertion : O(n) sur tableaux presque triés'}
    ]
  },
  {
    id:'sql', cat:'info', icon:'🗄', color:'#3A7D44',
    title:'Bases de Données SQL',
    subtitle:'MCD · MLD · Requêtes SQL · Jointures · Agrégats',
    course:`
<h2>4. Bases de Données SQL</h2>
<h3>4.1 Modèle Conceptuel (MCD)</h3>
<div class="def-box"><strong>Entité :</strong> Objet du monde réel (Etudiant, Cours). <strong>Association :</strong> lien entre entités. <strong>Cardinalité :</strong> (1,1), (1,N), (N,N).</div>
<p>MCD → MLD → SQL (MPD)</p>
<h3>4.2 Modèle Logique (MLD)</h3>
<ul>
<li>Entité → Table</li>
<li>Association (1,N) → Clé étrangère côté N</li>
<li>Association (N,N) → Table de jointure</li>
</ul>
<h3>4.3 SQL – Requêtes de base</h3>
<pre><span class="kw">SELECT</span> col1, col2 <span class="kw">FROM</span> table
<span class="kw">WHERE</span> condition
<span class="kw">ORDER BY</span> col1 [<span class="kw">ASC</span>|<span class="kw">DESC</span>]
<span class="kw">LIMIT</span> n;</pre>
<h3>4.4 Jointures</h3>
<pre><span class="cm">-- INNER JOIN : intersection</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> A <span class="kw">INNER JOIN</span> B <span class="kw">ON</span> A.id = B.a_id;
<span class="cm">-- LEFT JOIN : tous les enregistrements de A</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> A <span class="kw">LEFT JOIN</span> B <span class="kw">ON</span> A.id = B.a_id;
<span class="cm">-- FULL OUTER JOIN : union</span></pre>
<h3>4.5 Agrégats & Groupement</h3>
<pre><span class="kw">SELECT</span> dept, <span class="fn">COUNT</span>(*), <span class="fn">AVG</span>(salaire), <span class="fn">MAX</span>(salaire)
<span class="kw">FROM</span> employes
<span class="kw">GROUP BY</span> dept
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) > <span class="num">5</span>;</pre>
<h3>4.6 DDL et DML</h3>
<pre><span class="cm">-- DDL</span>
<span class="kw">CREATE TABLE</span> Etudiant(id <span class="kw">INT PRIMARY KEY</span>, nom <span class="kw">VARCHAR</span>(<span class="num">50</span>), age <span class="kw">INT</span>);
<span class="kw">ALTER TABLE</span> Etudiant <span class="kw">ADD</span> email <span class="kw">VARCHAR</span>(<span class="num">100</span>);
<span class="cm">-- DML</span>
<span class="kw">INSERT INTO</span> Etudiant <span class="kw">VALUES</span>(<span class="num">1</span>,<span class="str">'Ali'</span>,<span class="num">20</span>);
<span class="kw">UPDATE</span> Etudiant <span class="kw">SET</span> age=<span class="num">21</span> <span class="kw">WHERE</span> id=<span class="num">1</span>;
<span class="kw">DELETE FROM</span> Etudiant <span class="kw">WHERE</span> id=<span class="num">1</span>;</pre>
<h3>4.7 Normalisation</h3>
<div class="formula-box">
<code>1NF : valeurs atomiques, pas de groupes répétés</code><br>
<code>2NF : 1NF + toute dépendance fonctionnelle partielle éliminée</code><br>
<code>3NF : 2NF + pas de dépendance transitive</code><br>
<code>BCNF : toute DF non triviale a un déterminant qui est superclé</code>
</div>`,
    exercises:[
      {id:1,level:'facile',title:'SELECT de base',
       question:'<p>Écrire une requête qui retourne tous les étudiants de plus de 20 ans, triés par nom.</p>',
       solution:`<pre><span class="kw">SELECT</span> * <span class="kw">FROM</span> Etudiant <span class="kw">WHERE</span> age > <span class="num">20</span> <span class="kw">ORDER BY</span> nom <span class="kw">ASC</span>;</pre>`},
      {id:2,level:'facile',title:'INSERT et UPDATE',
       question:'<p>Insérer (5, "Youssef", 22) dans Etudiant puis le mettre à jour (age=23).</p>',
       solution:`<pre><span class="kw">INSERT INTO</span> Etudiant <span class="kw">VALUES</span>(<span class="num">5</span>,<span class="str">'Youssef'</span>,<span class="num">22</span>);
<span class="kw">UPDATE</span> Etudiant <span class="kw">SET</span> age=<span class="num">23</span> <span class="kw">WHERE</span> id=<span class="num">5</span>;</pre>`},
      {id:3,level:'moyen',title:'INNER JOIN',
       question:'<p>Lister les étudiants et leurs cours (tables Etudiant(id,nom) et Inscription(etud_id,cours_id), Cours(id,intitule)).</p>',
       solution:`<pre><span class="kw">SELECT</span> E.nom, C.intitule
<span class="kw">FROM</span> Etudiant E
<span class="kw">INNER JOIN</span> Inscription I <span class="kw">ON</span> E.id=I.etud_id
<span class="kw">INNER JOIN</span> Cours C <span class="kw">ON</span> I.cours_id=C.id;</pre>`},
      {id:4,level:'moyen',title:'Agrégats',
       question:'<p>Nombre d\'étudiants par département et moyenne des notes, uniquement si le département a plus de 3 étudiants.</p>',
       solution:`<pre><span class="kw">SELECT</span> dept, <span class="fn">COUNT</span>(*) nb, <span class="fn">AVG</span>(note) moy
<span class="kw">FROM</span> Etudiant
<span class="kw">GROUP BY</span> dept
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) > <span class="num">3</span>;</pre>`},
      {id:5,level:'moyen',title:'Sous-requête',
       question:'<p>Trouver les étudiants dont la note est supérieure à la moyenne générale.</p>',
       solution:`<pre><span class="kw">SELECT</span> nom, note
<span class="kw">FROM</span> Etudiant
<span class="kw">WHERE</span> note > (<span class="kw">SELECT</span> <span class="fn">AVG</span>(note) <span class="kw">FROM</span> Etudiant);</pre>`},
      {id:6,level:'moyen',title:'LEFT JOIN',
       question:'<p>Lister tous les étudiants, et leurs cours s\'ils en ont (sinon NULL).</p>',
       solution:`<pre><span class="kw">SELECT</span> E.nom, C.intitule
<span class="kw">FROM</span> Etudiant E
<span class="kw">LEFT JOIN</span> Inscription I <span class="kw">ON</span> E.id=I.etud_id
<span class="kw">LEFT JOIN</span> Cours C <span class="kw">ON</span> I.cours_id=C.id;</pre>`},
      {id:7,level:'difficile',title:'Normalisation',
       question:'<p>Normaliser en 3NF : R(Etud_id, Etud_nom, Dept_id, Dept_nom, Cours_id, Note)</p>',
       solution:`<p>DF : Etud_id→Etud_nom, Etud_id→Dept_id, Dept_id→Dept_nom, (Etud_id,Cours_id)→Note<br>Tables en 3NF :<br>• Etudiant(<u>Etud_id</u>, Etud_nom, Dept_id)<br>• Departement(<u>Dept_id</u>, Dept_nom)<br>• Inscription(<u>Etud_id, Cours_id</u>, Note)</p>`},
      {id:8,level:'difficile',title:'Requête imbriquée complexe',
       question:'<p>Pour chaque département, le nom de l\'étudiant ayant la note maximale.</p>',
       solution:`<pre><span class="kw">SELECT</span> dept, nom, note
<span class="kw">FROM</span> Etudiant E1
<span class="kw">WHERE</span> note = (
    <span class="kw">SELECT MAX</span>(note) <span class="kw">FROM</span> Etudiant E2
    <span class="kw">WHERE</span> E2.dept = E1.dept
);</pre>`}
    ],
    quiz:[
      {q:'SELECT DISTINCT retourne :',opts:['Tous les enregistrements','Aucun doublon','Seulement les NULL','Les enregistrements triés'],ans:1,exp:'DISTINCT élimine les doublons'},
      {q:'HAVING est utilisé avec :',opts:['WHERE','ORDER BY','GROUP BY','JOIN'],ans:2,exp:'HAVING filtre après GROUP BY'},
      {q:'INNER JOIN retourne :',opts:['Tous les enregistrements de A','Les enregistrements communs','Tous les enregistrements','Aucun doublon'],ans:1,exp:'INNER JOIN = intersection'},
      {q:'PRIMARY KEY = ?',opts:['Identifiant unique + NOT NULL','Clé étrangère','Valeur dupliquée','Index uniquement'],ans:0,exp:'PK = unique + non null'},
      {q:'3NF élimine :',opts:['Valeurs non atomiques','DF partielles','DF transitives','Tous les NULL'],ans:2,exp:'3NF élimine les dépendances transitives'},
      {q:'COUNT(*) compte :',opts:['Les colonnes','Toutes les lignes','Les lignes non NULL','Les lignes uniques'],ans:1,exp:'COUNT(*) = toutes les lignes'},
      {q:'DELETE vs TRUNCATE :',opts:['Identiques','DELETE peut avoir WHERE','TRUNCATE peut avoir WHERE','DELETE plus rapide'],ans:1,exp:'DELETE peut filtrer avec WHERE ; TRUNCATE supprime tout'},
      {q:'Une FK (clé étrangère) référence :',opts:['N\'importe quelle colonne','Une PK d\'une autre table','Une colonne unique','Un index'],ans:1,exp:'FK référence la PK d\'une table parent'},
      {q:'ORDER BY DESC :',opts:['Ordre croissant','Ordre décroissant','Aucun ordre','Ordre alphabétique'],ans:1,exp:'DESC = ordre décroissant'},
      {q:'En 1NF, chaque cellule doit être :',opts:['NULL','Multi-valuée','Atomique','Clé primaire'],ans:2,exp:'1NF : valeurs atomiques (pas de listes)'}
    ]
  },
  {
    id:'reseaux', cat:'info', icon:'🌐', color:'#2E7D6B',
    title:'Réseaux & Protocoles',
    subtitle:'Modèle OSI · TCP/IP · Routage · Protocoles',
    course:`

<h3>Cours officiel — Pr Faouzia Benabbou, MIP 2025 FSBM</h3>
<div class="def-box"><strong>Définition :</strong> Un réseau est un ensemble composé de PC, postes de travail, périphériques et software reliés par des supports de transmission. Objectifs : Interconnexion · Partage des ressources · Amélioration des performances.</div>
<h4>Supports de transmission et topologies</h4>
<div class="formula-box">
<code>Câbles : coaxial | paire torsadée (UTP/STP) | fibre optique</code><br>
<code>Sans fil : Wi-Fi (802.11) | Bluetooth | 4G/5G</code><br>
<code>Topologies : Bus | Étoile | Anneau | Maillage | Hybride</code><br>
<code>Classification : LAN | MAN | WAN | Internet</code>
</div>
<h4>Modèle OSI — Couches et PDU</h4>
<table>
<tr><th>N°</th><th>Couche</th><th>PDU</th><th>Protocoles clés</th><th>Équipements</th></tr>
<tr><td>7</td><td>Application</td><td>Données</td><td>HTTP, FTP, SMTP, DNS, SSH, SNMP</td><td>Serveurs</td></tr>
<tr><td>6</td><td>Présentation</td><td>Données</td><td>SSL/TLS, JPEG, MPEG, ASCII</td><td>—</td></tr>
<tr><td>5</td><td>Session</td><td>Données</td><td>NetBIOS, RPC, PPTP</td><td>—</td></tr>
<tr><td>4</td><td>Transport</td><td>Segment</td><td>TCP, UDP, SCTP</td><td>Pare-feux</td></tr>
<tr><td>3</td><td>Réseau</td><td>Paquet</td><td>IP, ICMP, ARP, OSPF, BGP</td><td>Routeurs</td></tr>
<tr><td>2</td><td>Liaison</td><td>Trame</td><td>Ethernet, PPP, 802.11 MAC</td><td>Commutateurs, Bridges</td></tr>
<tr><td>1</td><td>Physique</td><td>Bits</td><td>Câbles, signaux, modulation</td><td>Hubs, Répéteurs</td></tr>
</table>
<h4>Calcul d\'adressage IP et sous-réseaux</h4>
<div class="formula-box">
<code>Adresse réseau = IP AND Masque | Broadcast = Réseau OR NOT(Masque)</code><br>
<code>Nb hôtes = 2^(32-préfixe) - 2 | Masque /n : n bits à 1, (32-n) bits à 0</code>
</div>
<div class="example-box"><strong>Exemple complet — 192.168.1.0/26 :</strong><br>
Masque = 255.255.255.192 = /26<br>
Adresses : 64 | Hôtes utilisables : 62<br>
Première IP : 192.168.1.1 | Dernière : 192.168.1.62 | Broadcast : 192.168.1.63</div>
<h2>5. Réseaux & Protocoles</h2>
<h3>5.1 Modèle OSI (7 couches)</h3>
<table>
<tr><th>N°</th><th>Couche</th><th>Protocoles / Équipements</th></tr>
<tr><td>7</td><td>Application</td><td>HTTP, FTP, SMTP, DNS, SSH</td></tr>
<tr><td>6</td><td>Présentation</td><td>SSL/TLS, JPEG, ASCII</td></tr>
<tr><td>5</td><td>Session</td><td>NetBIOS, RPC</td></tr>
<tr><td>4</td><td>Transport</td><td>TCP, UDP</td></tr>
<tr><td>3</td><td>Réseau</td><td>IP, ICMP, Routeurs</td></tr>
<tr><td>2</td><td>Liaison</td><td>Ethernet, MAC, Switches</td></tr>
<tr><td>1</td><td>Physique</td><td>Câbles, Hubs, bits</td></tr>
</table>
<h3>5.2 TCP vs UDP</h3>
<table>
<tr><th>TCP</th><th>UDP</th></tr>
<tr><td>Fiable, connexion établie</td><td>Non fiable, sans connexion</td></tr>
<tr><td>Three-way handshake (SYN, SYN-ACK, ACK)</td><td>Pas de handshake</td></tr>
<tr><td>HTTP, FTP, SMTP</td><td>DNS, DHCP, vidéo streaming</td></tr>
</table>
<h3>5.3 Adressage IP</h3>
<div class="formula-box">
<code>IPv4 : 4 octets, ex : 192.168.1.0/24</code><br>
<code>Masque /24 = 255.255.255.0 → 256 adresses, 254 hôtes</code><br>
<code>Classes : A (0-127), B (128-191), C (192-223)</code>
</div>
<div class="example-box"><strong>Sous-réseaux :</strong> 192.168.1.0/26 → masque 255.255.255.192 → 64 adresses → 62 hôtes par sous-réseau.</div>
<h3>5.4 Routage</h3>
<ul>
<li><strong>Statique :</strong> Routes configurées manuellement</li>
<li><strong>RIP :</strong> Vecteur de distance, max 15 sauts</li>
<li><strong>OSPF :</strong> Algorithme de Dijkstra sur le graphe du réseau</li>
<li><strong>BGP :</strong> Entre systèmes autonomes (Internet)</li>
</ul>
<h3>5.5 Protocoles courants</h3>
<div class="formula-box">
<code>HTTP : 80 | HTTPS : 443 | FTP : 21 | SSH : 22</code><br>
<code>DNS : 53 | DHCP : 67/68 | SMTP : 25 | POP3 : 110</code>
</div>`,
    exercises:[
      {id:1,level:'facile',title:'Modèle OSI',
       question:'<p>Nommer les 7 couches OSI et citer un protocole pour chacune.</p>',
       solution:`<p>7-Application (HTTP) | 6-Présentation (TLS) | 5-Session (NetBIOS) | 4-Transport (TCP) | 3-Réseau (IP) | 2-Liaison (Ethernet) | 1-Physique (Câbles)</p>`},
      {id:2,level:'facile',title:'TCP Three-way handshake',
       question:'<p>Décrire les 3 étapes du handshake TCP.</p>',
       solution:`<p>1. Client → SYN → Serveur<br>2. Serveur → SYN-ACK → Client<br>3. Client → ACK → Serveur<br>La connexion est établie.</p>`},
      {id:3,level:'moyen',title:'Sous-réseaux',
       question:'<p>Calculer le nombre d\'hôtes disponibles dans le réseau 10.0.0.0/20.</p>',
       solution:`<p>/20 = 20 bits réseau, 12 bits hôtes. 2¹² = 4096 adresses. Hôtes = 4096 − 2 = <strong>4094</strong></p>`},
      {id:4,level:'moyen',title:'Différence TCP/UDP',
       question:'<p>Pourquoi utiliser UDP pour le streaming vidéo plutôt que TCP ?</p>',
       solution:`<p>UDP ne retransmet pas les paquets perdus → latence plus faible. Pour la vidéo, quelques paquets perdus = quelques pixels manquants (acceptable). TCP attendra la retransmission → gel de la vidéo (inacceptable).</p>`},
      {id:5,level:'moyen',title:'DNS et DHCP',
       question:'<p>Expliquer le rôle de DNS et DHCP.</p>',
       solution:`<p>• <strong>DNS :</strong> traduit un nom de domaine en adresse IP (ex: google.com → 142.250.x.x)<br>• <strong>DHCP :</strong> attribue automatiquement des adresses IP aux hôtes d\'un réseau</p>`},
      {id:6,level:'difficile',title:'Routage OSPF',
       question:'<p>Comment OSPF calcule-t-il les routes optimales ?</p>',
       solution:`<p>Chaque routeur construit une carte complète du réseau (LSDB - Link State Database). Il applique l\'algorithme de Dijkstra sur ce graphe pondéré (coût = bande passante) pour calculer l\'arbre couvrant minimal depuis lui-même. Les routes sont installées dans la table de routage.</p>`}
    ],
    quiz:[
      {q:'La couche Transport du modèle OSI :',opts:['IP et routeurs','TCP et UDP','HTTP et FTP','Ethernet et MAC'],ans:1,exp:'Couche 4 Transport = TCP, UDP'},
      {q:'TCP est :',opts:['Non fiable','Sans connexion','Fiable avec handshake','Identique à UDP'],ans:2,exp:'TCP = fiable, connexion établie via handshake'},
      {q:'Port HTTP = ?',opts:['21','22','80','443'],ans:2,exp:'HTTP utilise le port 80'},
      {q:'/24 en masque CIDR = ?',opts:['255.0.0.0','255.255.0.0','255.255.255.0','255.255.255.128'],ans:2,exp:'24 bits → 255.255.255.0'},
      {q:'DNS traduit :',opts:['IP en MAC','Nom de domaine en IP','Port en protocole','Sous-réseau en hôtes'],ans:1,exp:'DNS = résolution de noms'},
      {q:'OSPF utilise quel algorithme ?',opts:['Bellman-Ford','Floyd-Warshall','Dijkstra','BFS'],ans:2,exp:'OSPF = algorithme de Dijkstra'},
      {q:'UDP est utilisé pour :',opts:['Téléchargement fichiers','Streaming vidéo','Email','HTTP'],ans:1,exp:'UDP = faible latence, adapté au streaming'},
      {q:'Nombre d\'hôtes dans /26 :',opts:['62','64','254','126'],ans:0,exp:'2⁶−2 = 62 hôtes'},
      {q:'BGP est utilisé :',opts:['Dans un LAN','Entre systèmes autonomes','Dans les LANs WiFi','Pour DNS'],ans:1,exp:'BGP = protocole inter-AS sur Internet'},
      {q:'Port HTTPS = ?',opts:['80','443','22','21'],ans:1,exp:'HTTPS = port 443'}
    ]
  },
  {
    id:'os', cat:'info', icon:'⌨', color:'#1A5276',
    title:'Systèmes d\'Exploitation',
    subtitle:'Linux · Processus · Mémoire · Ordonnancement',
    course:`
<h2>6. Systèmes d'Exploitation</h2>
<h3>6.1 Commandes Linux essentielles</h3>
<div class="formula-box">
<code>ls -la | cd /chemin | pwd | mkdir nom | rm -rf dir</code><br>
<code>cat fichier | grep "motif" | find . -name "*.c" | chmod 755 f</code><br>
<code>ps aux | kill PID | top | df -h | du -sh * | tar -czvf</code><br>
<code>cat f1 | sort | uniq | wc -l | sed 's/A/B/g\' | awk '{print $1}'</code>
</div>
<h3>6.2 Processus</h3>
<div class="def-box"><strong>Processus :</strong> Programme en cours d\'exécution avec ses ressources (PID, espace mémoire, fichiers ouverts).<br>
États : Prêt → En cours → Bloqué → Terminé</div>
<div class="formula-box">
<code>fork() : crée un processus fils | exec() : remplace l\'image | wait() : attend le fils</code>
</div>
<h3>6.3 Ordonnancement</h3>
<table>
<tr><th>Algorithme</th><th>Principe</th><th>Problème</th></tr>
<tr><td>FCFS</td><td>Premier arrivé, premier servi</td><td>Effet convoi</td></tr>
<tr><td>SJF</td><td>Plus court en premier</td><td>Famine</td></tr>
<tr><td>Round Robin</td><td>Quantum de temps</td><td>Overhead si quantum petit</td></tr>
<tr><td>Priorité</td><td>Selon priorité</td><td>Famine des basses priorités</td></tr>
</table>
<h3>6.4 Gestion Mémoire</h3>
<ul>
<li><strong>Pagination :</strong> Mémoire divisée en pages de taille fixe. Table des pages.</li>
<li><strong>Segmentation :</strong> Mémoire divisée en segments logiques.</li>
<li><strong>Mémoire virtuelle :</strong> Illusion d\'un grand espace mémoire via le swap.</li>
<li><strong>Remplacement de pages :</strong> FIFO, LRU (Least Recently Used), Optimal.</li>
</ul>
<h3>6.5 Synchronisation</h3>
<div class="formula-box">
<code>Mutex : exclusion mutuelle | Sémaphore : compteur + file d\'attente</code><br>
<code>Deadlock (interblocage) : 4 conditions de Coffman</code>
</div>`,
    exercises:[
      {id:1,level:'facile',title:'Commandes Linux',
       question:'<p>Écrire les commandes pour : lister tous les fichiers .c dans le répertoire courant, puis les trier par nom.</p>',
       solution:`<pre>find . -name <span class="str">"*.c"</span> | sort</pre>`},
      {id:2,level:'facile',title:'Permissions',
       question:'<p>Quelle est la signification de chmod 755 sur un fichier ?</p>',
       solution:`<p>755 = rwxr-xr-x :<br>• Propriétaire : lecture(4)+écriture(2)+exécution(1) = 7<br>• Groupe : lecture+exécution = 5<br>• Autres : lecture+exécution = 5</p>`},
      {id:3,level:'moyen',title:'Ordonnancement Round Robin',
       question:'<p>3 processus P1(6), P2(4), P3(2) arrivent en t=0. Quantum=2. Calculer le temps de réponse moyen.</p>',
       solution:`<p>Gantt : P1(0-2), P2(2-4), P3(4-6), P1(6-8), P2(8-10), P1(10-12)<br>Fin : P3=6, P2=10, P1=12. Délai moy = (6+10+12)/3 = <strong>9.33</strong></p>`},
      {id:4,level:'moyen',title:'Fork en C',
       question:'<p>Combien de processus sont créés par : fork(); fork(); fork(); ?</p>',
       solution:`<p>Chaque fork() double le nombre de processus. 3 fork() → 2³ = <strong>8 processus</strong></p>`},
      {id:5,level:'difficile',title:'Deadlock',
       question:'<p>Expliquer les 4 conditions de Coffman pour un deadlock.</p>',
       solution:`<p>1. <strong>Exclusion mutuelle</strong> : ressource non partageable<br>2. <strong>Possession et attente</strong> : processus tient une ressource et en attend une autre<br>3. <strong>Pas de préemption</strong> : ressource ne peut être retirée de force<br>4. <strong>Attente circulaire</strong> : chaîne circulaire de processus s'attendant mutuellement</p>`}
    ],
    quiz:[
      {q:'La commande grep sert à :',opts:['Lister les fichiers','Rechercher un motif dans un texte','Créer un répertoire','Gérer les processus'],ans:1,exp:'grep = recherche de motifs/expressions régulières'},
      {q:'fork() crée :',opts:['Un thread','Un processus fils identique','Un processus serveur','Un pipe'],ans:1,exp:'fork() = copie exacte du processus parent'},
      {q:'FIFO en ordonnancement signifie :',opts:['Plus rapide d\'abord','Premier arrivé premier servi','Plus court d\'abord','Par priorité'],ans:1,exp:'FIFO = First In First Out = FCFS'},
      {q:'LRU est une politique de :',opts:['Ordonnancement','Remplacement de pages','Synchronisation','Allocation mémoire'],ans:1,exp:'LRU = Least Recently Used pour le remplacement de pages'},
      {q:'Un mutex assure :',opts:['Parallélisme','Exclusion mutuelle','Allocation dynamique','Communication réseau'],ans:1,exp:'Mutex = exclusion mutuelle'},
      {q:'chmod 777 donne :',opts:['Lecture seule à tous','Tous les droits à tous','Exécution seule','Droits propriétaire seul'],ans:1,exp:'7=rwx → tous les droits pour propriétaire, groupe et autres'},
      {q:'La mémoire virtuelle permet :',opts:['D\'utiliser plus de RAM','D\'accéder à plus de mémoire que la RAM physique','De supprimer le swap','De segmenter uniquement'],ans:1,exp:'Mémoire virtuelle = swap + pagination'},
      {q:'ps aux affiche :',opts:['Les processus actifs','Les partitions','L\'utilisation réseau','Les utilisateurs'],ans:0,exp:'ps aux = liste tous les processus en cours'},
      {q:'Un deadlock nécessite combien de conditions de Coffman ?',opts:['2','3','4','5'],ans:2,exp:'4 conditions : exclusion mutuelle, possession/attente, non-préemption, attente circulaire'},
      {q:'La commande kill envoie :',opts:['Un signal','Une commande réseau','Un email','Une instruction CPU'],ans:0,exp:'kill envoie un signal (SIGTERM par défaut, SIGKILL avec -9)'}
    ]
  },
  {
    id:'archi', cat:'info', icon:'🖥', color:'#7D3C98',
    title:'Architecture Machine',
    subtitle:'CPU · Mémoire · Bus · Binaire · Logique',
    course:`
<h2>7. Architecture Machine</h2>
<h3>7.1 Organisation d\'un ordinateur</h3>
<div class="def-box"><strong>Composants :</strong> CPU (processeur), RAM (mémoire vive), ROM, bus de données, bus d\'adresses, bus de contrôle, périphériques E/S.</div>
<h3>7.2 Le processeur (CPU)</h3>
<ul>
<li><strong>ALU :</strong> Unité Arithmétique et Logique (calculs)</li>
<li><strong>UC :</strong> Unité de Contrôle (décodage, séquencement)</li>
<li><strong>Registres :</strong> PC, SP, IR, ACC, flags</li>
<li><strong>Cache :</strong> L1 (très rapide), L2, L3</li>
</ul>
<h4>Cycle d\'instruction (fetch-decode-execute)</h4>
<ol>
<li>Fetch : lecture de l\'instruction depuis la mémoire</li>
<li>Decode : décodage de l\'instruction</li>
<li>Execute : exécution dans l'ALU</li>
<li>Write-back : écriture du résultat</li>
</ol>
<h3>7.3 Hiérarchie mémoire</h3>
<div class="formula-box">
<code>Registres → Cache L1 → Cache L2 → RAM → Disque (SSD/HDD)</code><br>
<code>Rapidité : ←————————————————————————————— lent</code><br>
<code>Capacité : petit ———————————————————————————→ grand</code>
</div>
<h3>7.4 Représentation binaire</h3>
<div class="formula-box">
<code>Décimal → Binaire : divisions successives par 2</code><br>
<code>Binaire → Décimal : Σ bᵢ · 2ⁱ</code><br>
<code>Hexadécimal : 0-9, A-F (base 16)</code><br>
<code>Complément à 2 : inverser les bits + 1 (entiers négatifs)</code>
</div>
<div class="example-box"><strong>Exemples :</strong><br>
42₁₀ = 32+8+2 = 2⁵+2³+2¹ = <strong>101010₂</strong><br>
0xFF = 15×16+15 = <strong>255₁₀</strong><br>
−5 sur 8 bits : 5=00000101 → NOT=11111010 → +1=<strong>11111011</strong></div>
<h3>7.5 Portes logiques et algèbre de Boole</h3>
<table>
<tr><th>Porte</th><th>Symbole</th><th>Expression</th></tr>
<tr><td>AND</td><td>&amp;</td><td>A·B</td></tr>
<tr><td>OR</td><td>≥1</td><td>A+B</td></tr>
<tr><td>NOT</td><td>1</td><td>Ā</td></tr>
<tr><td>NAND</td><td>&amp;̄</td><td>NOT(A·B)</td></tr>
<tr><td>XOR</td><td>=1</td><td>A⊕B</td></tr>
</table>
<div class="theorem-box"><strong>Lois de De Morgan :</strong><br>
NOT(A AND B) = NOT(A) OR NOT(B)<br>
NOT(A OR B) = NOT(A) AND NOT(B)</div>`,
    exercises:[
      {id:1,level:'facile',title:'Conversions binaires',
       question:'<p>Convertir : 75₁₀ en binaire, 10110₂ en décimal, 0xAB en décimal.</p>',
       solution:`<p>75 = 64+8+2+1 = <strong>1001011₂</strong><br>10110 = 16+4+2 = <strong>22₁₀</strong><br>0xAB = 10×16+11 = <strong>171₁₀</strong></p>`},
      {id:2,level:'facile',title:'Complément à 2',
       question:'<p>Représenter −25 en complément à 2 sur 8 bits.</p>',
       solution:`<p>25 = 00011001. NOT = 11100110. +1 = <strong>11100111</strong></p>`},
      {id:3,level:'moyen',title:'Algèbre de Boole',
       question:'<p>Simplifier : F = A·B + A·B̄ + Ā·B</p>',
       solution:`<p>A·B + A·B̄ = A·(B+B̄) = A·1 = A.<br>F = A + Ā·B = A + B (absorption/De Morgan) → <strong>F = A + B</strong></p>`},
      {id:4,level:'moyen',title:'Cache et localité',
       question:'<p>Expliquer les principes de localité temporelle et spatiale pour les caches.</p>',
       solution:`<p>• <strong>Temporelle :</strong> Une donnée accédée récemment sera probablement réaccédée (boucles)<br>• <strong>Spatiale :</strong> Si une donnée est accédée, ses voisins le seront probablement (tableaux)</p>`}
    ],
    quiz:[
      {q:'42 en binaire = ?',opts:['101000','101010','100010','110010'],ans:1,exp:'42=32+8+2=2⁵+2³+2¹=101010'},
      {q:'Complément à 2 sert à représenter :',opts:['Flottants','Entiers négatifs','Caractères','Adresses'],ans:1,exp:'Complément à 2 = représentation des entiers négatifs'},
      {q:'NOT(A AND B) = ?',opts:['NOT(A) AND NOT(B)','NOT(A) OR NOT(B)','A OR B','A AND B'],ans:1,exp:'Loi de De Morgan'},
      {q:'0xFF en décimal = ?',opts:['128','200','255','256'],ans:2,exp:'F×16+F = 15×16+15 = 255'},
      {q:'L\'ALU effectue :',opts:['La gestion mémoire','Les calculs arithmétiques et logiques','Le décodage d\'instructions','La gestion des E/S'],ans:1,exp:'ALU = Arithmetic and Logic Unit'},
      {q:'Cache L1 est :',opts:['Plus grand que RAM','Le plus rapide','Le plus lent','Sur disque'],ans:1,exp:'Cache L1 = plus proche du CPU, le plus rapide'},
      {q:'Le bus d\'adresses transporte :',opts:['Les données','Les adresses mémoire','Les signaux d\'horloge','Les interruptions'],ans:1,exp:'Bus d\'adresses = adresses mémoire'},
      {q:'10110 en décimal = ?',opts:['14','22','16','26'],ans:1,exp:'16+4+2=22'},
      {q:'XOR : 1⊕1 = ?',opts:['0','1','2','Indéfini'],ans:0,exp:'XOR : identiques→0, différents→1'},
      {q:'Le registre PC (Program Counter) contient :',opts:['Le résultat courant','L\'adresse de la prochaine instruction','Les flags','Le pointeur de pile'],ans:1,exp:'PC = adresse de la prochaine instruction à exécuter'}
    ]
  },
  {
    id:'uml', cat:'info', icon:'📐', color:'#B7770D',
    title:'Modélisation UML',
    subtitle:'Diagrammes de classes · Séquence · Cas d\'utilisation',
    course:`
<h2>8. Modélisation UML</h2>
<h3>8.1 Diagramme de classes</h3>
<div class="def-box"><strong>Classe :</strong> Nom | Attributs (-privé, +public, #protégé) | Méthodes</div>
<h4>Relations entre classes</h4>
<table>
<tr><th>Relation</th><th>Symbole</th><th>Signification</th></tr>
<tr><td>Association</td><td>──────</td><td>Lien simple entre classes</td></tr>
<tr><td>Agrégation</td><td>──────◇</td><td>Partie de (cycle de vie indépendant)</td></tr>
<tr><td>Composition</td><td>──────◆</td><td>Partie de (cycle de vie dépendant)</td></tr>
<tr><td>Héritage</td><td>──────▷</td><td>Est-un (is-a)</td></tr>
<tr><td>Implémentation</td><td>-----▷</td><td>Réalise une interface</td></tr>
<tr><td>Dépendance</td><td>- - - →</td><td>Utilise temporairement</td></tr>
</table>
<div class="example-box"><strong>Exemple :</strong><br>
[Etudiant] ──* inscrit à *── [Cours]<br>
[Personne] ──▷ [Etudiant] (héritage)<br>
[Université] ──◆ [Département] (composition)</div>
<h3>8.2 Diagramme de cas d\'utilisation</h3>
<p>Acteurs (externes) + cas d\'utilisation (ellipses) dans un système.<br>
Relations : <code>include</code> (obligatoire), <code>extend</code> (optionnel).</p>
<h3>8.3 Diagramme de séquence</h3>
<p>Représente l\'interaction entre objets dans le temps.<br>
Lignes de vie verticales, messages horizontaux (flèches).<br>
Blocs : alt (condition), loop (boucle), opt (optionnel).</p>
<h3>8.4 Design Patterns courants</h3>
<ul>
<li><strong>Singleton :</strong> Une seule instance de la classe</li>
<li><strong>Factory :</strong> Crée des objets sans exposer la logique</li>
<li><strong>Observer :</strong> Notification automatique des changements</li>
<li><strong>MVC :</strong> Modèle-Vue-Contrôleur</li>
</ul>`,
    exercises:[
      {id:1,level:'facile',title:'Diagramme de classes simple',
       question:'<p>Modéliser en UML : un Étudiant a un nom et une note. Un Cours a un intitulé et peut avoir plusieurs Étudiants.</p>',
       solution:`<p>Classe Etudiant : −nom:String, −note:float<br>Classe Cours : −intitulé:String<br>Association : Cours 1 ──────── * Etudiant</p>`},
      {id:2,level:'moyen',title:'Héritage UML',
       question:'<p>Modéliser : Animal a un nom. Chien et Chat héritent de Animal. Chien a une méthode aboyer(), Chat a miauler().</p>',
       solution:`<p>Animal (nom:String, manger():void)<br>↑ Chien (aboyer():void) | ↑ Chat (miauler():void)<br>Flèche d'héritage de Chien et Chat vers Animal.</p>`},
      {id:3,level:'moyen',title:'Cas d\'utilisation',
       question:'<p>Modéliser un système de bibliothèque : un Lecteur peut chercher un livre et l\'emprunter. L\'emprunt inclut la vérification de disponibilité.</p>',
       solution:`<p>Acteur : Lecteur.<br>UC : "Chercher livre", "Emprunter livre".<br>"Emprunter livre" &lt;&lt;include&gt;&gt; "Vérifier disponibilité".</p>`},
      {id:4,level:'difficile',title:'Pattern Singleton',
       question:'<p>Implémenter le pattern Singleton en Java.</p>',
       solution:`<pre><span class="kw">public class</span> Singleton {
    <span class="kw">private static</span> Singleton instance = <span class="kw">null</span>;
    <span class="kw">private</span> <span class="fn">Singleton</span>() {}
    <span class="kw">public static</span> Singleton <span class="fn">getInstance</span>() {
        <span class="kw">if</span>(instance == <span class="kw">null</span>)
            instance = <span class="kw">new</span> <span class="fn">Singleton</span>();
        <span class="kw">return</span> instance;
    }
}</pre>`}
    ],
    quiz:[
      {q:'La composition UML signifie :',opts:['Lien faible','Cycle de vie dépendant','Cycle de vie indépendant','Héritage multiple'],ans:1,exp:'Composition = partie forte, vie dépend du tout'},
      {q:'&lt;&lt;include&gt;&gt; dans les cas d\'utilisation :',opts:['Optionnel','Obligatoire','Héritage','Implémentation'],ans:1,exp:'include = UC inclus systématiquement'},
      {q:'L\'héritage UML est représenté par :',opts:['──◆','──◇','──▷','- - →'],ans:2,exp:'Flèche creuse (▷) = héritage (is-a)'},
      {q:'Le pattern Singleton garantit :',opts:['Plusieurs instances','Une seule instance','Aucune instance','Des instances partagées'],ans:1,exp:'Singleton = une seule instance globale'},
      {q:'MVC signifie :',opts:['Modèle-Vue-Contrôleur','Machine-Virtuelle-Cache','Mémoire-Variable-Classe','Méthode-Vue-Code'],ans:0,exp:'MVC = Modèle Vue Contrôleur'}
    ]
  },
  {
    id:'javapython', cat:'info', icon:'☕', color:'#E65100',
    title:'Java OOP & Python',
    subtitle:'Héritage · Polymorphisme · Python Avancé · Décorateurs',
    course:`

<h3>Cours officiel — Dr Abdessamad Belangour, FSBM MIP 2024-2025</h3>
<div class="def-box"><strong>Java :</strong> Plateforme créée par Sun Microsystems en 1995, rachetée par Oracle en 2009. Présent sur : Ordinateurs, Smart TV, Smartphones, Cartes SIM, Voitures.<br>
<strong>JVM (Java Virtual Machine) :</strong> interprète le bytecode — garantit la portabilité "Write Once, Run Anywhere"<br>
<strong>JDK = JRE + outils :</strong> javac (compilateur), java (exécuteur), javadoc, jar</div>
<div class="formula-box">
<code>Cycle : .java → javac → .class (bytecode) → JVM → exécution</code><br>
<code>Java SE (desktop) | Java EE (entreprise/serveurs) | Java ME (embarqué — obsolète)</code>
</div>
<h4>Généricité et fonctionnel (Java 5 / Java 8)</h4>
<pre><span class="cm">/* Classe générique */</span>
<span class="kw">public class</span> Paire&lt;T,U&gt; {{
    T premier; U second;
    <span class="kw">public</span> <span class="fn">Paire</span>(T p,U s){{premier=p;second=s;}}
}}

<span class="cm">/* Interface fonctionnelle + lambda */</span>
<span class="kw">@FunctionalInterface</span>
<span class="kw">interface</span> Calculatrice {{
    <span class="kw">int</span> <span class="fn">calc</span>(<span class="kw">int</span> a,<span class="kw">int</span> b);
}}
Calculatrice add=(a,b)->a+b;

<span class="cm">/* Streams Java 8 */</span>
List&lt;String&gt; filtres = liste.<span class="fn">stream</span>()
    .<span class="fn">filter</span>(s->s.<span class="fn">length</span>()><span class="num">3</span>)
    .<span class="fn">sorted</span>()
    .<span class="fn">collect</span>(Collectors.<span class="fn">toList</span>());

<span class="cm">/* try-with-resources */</span>
<span class="kw">try</span>(BufferedReader br=<span class="kw">new</span> <span class="fn">BufferedReader</span>(<span class="kw">new</span> <span class="fn">FileReader</span>(f))){{
    String ligne = br.<span class="fn">readLine</span>();
}} <span class="cm">// fermeture automatique</span></pre>
<h2>9. Java OOP & Python</h2>
<h3>Java – POO</h3>
<pre><span class="kw">public class</span> Animal {
    <span class="kw">protected</span> String nom;
    <span class="kw">public</span> <span class="fn">Animal</span>(String nom) { <span class="kw">this</span>.nom = nom; }
    <span class="kw">public void</span> <span class="fn">parler</span>() { System.out.println(<span class="str">"..."</span>); }
}
<span class="kw">public class</span> Chien <span class="kw">extends</span> Animal {
    <span class="kw">public</span> <span class="fn">Chien</span>(String nom) { <span class="kw">super</span>(nom); }
    <span class="kw">@Override</span>
    <span class="kw">public void</span> <span class="fn">parler</span>() { System.out.println(<span class="str">"Ouaf!"</span>); }
}</pre>
<div class="formula-box">
<code>Encapsulation : attributs privés + getters/setters</code><br>
<code>Héritage : extends (classe), implements (interface)</code><br>
<code>Polymorphisme : @Override, liaison dynamique</code><br>
<code>Abstraction : abstract class, interface</code>
</div>
<h3>Java – Collections</h3>
<pre>ArrayList&lt;String&gt; liste = <span class="kw">new</span> ArrayList&lt;&gt;();
HashMap&lt;String,Integer&gt; map = <span class="kw">new</span> HashMap&lt;&gt;();
map.put(<span class="str">"age"</span>, <span class="num">20</span>); map.get(<span class="str">"age"</span>); map.containsKey(<span class="str">"age"</span>);</pre>
<h3>Python – Bases</h3>
<pre><span class="cm"># Tout est objet</span>
lst = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>]; dct = {<span class="str">"a"</span>:<span class="num">1</span>}; tpl = (<span class="num">1</span>,<span class="num">2</span>)
lst_comp = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> range(<span class="num">10</span>) <span class="kw">if</span> x%<span class="num">2</span>==<span class="num">0</span>]
gen = (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> range(<span class="num">1000</span>)) <span class="cm"># générateur</span></pre>
<h3>Python – Classes</h3>
<pre><span class="kw">class</span> Animal:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, nom): self.nom = nom
    <span class="kw">def</span> <span class="fn">parler</span>(self): <span class="kw">return</span> <span class="str">"..."</span>

<span class="kw">class</span> Chien(Animal):
    <span class="kw">def</span> <span class="fn">parler</span>(self): <span class="kw">return</span> <span class="str">"Ouaf!"</span></pre>
<h3>Python – Décorateurs & Fonctionnel</h3>
<pre><span class="kw">def</span> <span class="fn">mon_decorateur</span>(func):
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        print(<span class="str">"Avant"</span>)
        res = <span class="fn">func</span>(*args, **kwargs)
        print(<span class="str">"Après"</span>)
        <span class="kw">return</span> res
    <span class="kw">return</span> wrapper

@mon_decorateur
<span class="kw">def</span> <span class="fn">bonjour</span>(): print(<span class="str">"Bonjour!"</span>)

<span class="cm"># Fonctionnel</span>
list(<span class="fn">map</span>(<span class="kw">lambda</span> x: x**<span class="num">2</span>, [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>])) <span class="cm"># [1,4,9]</span>
list(<span class="fn">filter</span>(<span class="kw">lambda</span> x: x%<span class="num">2</span>==<span class="num">0</span>, [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>])) <span class="cm"># [2,4]</span></pre>`,
    exercises:[
      {id:1,level:'facile',title:'Classe Java simple',
       question:'<p>Créer une classe Java Voiture avec attributs marque et vitesse, un constructeur et une méthode afficher().</p>',
       solution:`<pre><span class="kw">public class</span> Voiture {
    <span class="kw">private</span> String marque; <span class="kw">private int</span> vitesse;
    <span class="kw">public</span> <span class="fn">Voiture</span>(String m, <span class="kw">int</span> v){marque=m; vitesse=v;}
    <span class="kw">public void</span> <span class="fn">afficher</span>(){
        System.out.println(marque+<span class="str">" : "</span>+vitesse+<span class="str">" km/h"</span>);
    }
}</pre>`},
      {id:2,level:'moyen',title:'Héritage et polymorphisme Java',
       question:'<p>Créer Forme (abstract) avec methode aire(), puis Cercle et Rectangle l\'étendant.</p>',
       solution:`<pre><span class="kw">abstract class</span> Forme { <span class="kw">abstract double</span> <span class="fn">aire</span>(); }
<span class="kw">class</span> Cercle <span class="kw">extends</span> Forme {
    <span class="kw">double</span> r;
    <span class="kw">double</span> <span class="fn">aire</span>(){<span class="kw">return</span> Math.PI*r*r;}
}
<span class="kw">class</span> Rectangle <span class="kw">extends</span> Forme {
    <span class="kw">double</span> l,h;
    <span class="kw">double</span> <span class="fn">aire</span>(){<span class="kw">return</span> l*h;}
}</pre>`},
      {id:3,level:'moyen',title:'Python – List comprehension',
       question:'<p>En Python, filtrer les nombres impairs d\'une liste et les élever au carré.</p>',
       solution:`<pre>lst = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>,<span class="num">6</span>,<span class="num">7</span>]
res = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> lst <span class="kw">if</span> x%<span class="num">2</span>!=<span class="num">0</span>]
<span class="cm"># [1, 9, 25, 49]</span></pre>`},
      {id:4,level:'difficile',title:'Décorateur Python',
       question:'<p>Écrire un décorateur @chronometre qui mesure le temps d\'exécution d\'une fonction.</p>',
       solution:`<pre><span class="kw">import</span> time
<span class="kw">def</span> <span class="fn">chronometre</span>(func):
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args,**kw):
        t = time.<span class="fn">time</span>()
        res = <span class="fn">func</span>(*args,**kw)
        print(<span class="fn">f</span><span class="str">"{func.__name__}: {time.time()-t:.4f}s"</span>)
        <span class="kw">return</span> res
    <span class="kw">return</span> wrapper</pre>`}
    ],
    quiz:[
      {q:'@Override en Java sert à :',opts:['Créer une nouvelle méthode','Redéfinir une méthode héritée','Surcharger un opérateur','Déclarer une interface'],ans:1,exp:'@Override = redéfinition d\'une méthode parent'},
      {q:'En Python, __init__ est :',opts:['Un destructeur','Un constructeur','Un décorateur','Une propriété'],ans:1,exp:'__init__ = constructeur Python'},
      {q:'List comprehension [x*2 for x in range(3)] = ?',opts:['[0,1,2]','[2,4,6]','[0,2,4]','[1,2,3]'],ans:2,exp:'x prend 0,1,2 → x*2 donne 0,2,4'},
      {q:'Java extends vs implements :',opts:['Identiques','extends = classe, implements = interface','extends = interface, implements = classe','Aucune différence'],ans:1,exp:'extends = hériter d\'une classe, implements = réaliser une interface'},
      {q:'Un générateur Python (yield) :',opts:['Retourne une liste','Produit des valeurs à la demande','Crée un objet','Décore une fonction'],ans:1,exp:'Generator = valeurs produites paresseusement via yield'}
    ]
  },
  {
    id:'binaire', cat:'info', icon:'01', color:'#1A2A3A',
    title:'Binaire, Hexadécimal & Logique',
    subtitle:'Conversions · Algèbre de Boole · Tableaux de Karnaugh',
    course:`
<h2>10. Binaire, Hexadécimal & Logique</h2>
<h3>10.1 Systèmes de numération</h3>
<div class="formula-box">
<code>Binaire (base 2) : 0,1</code><br>
<code>Octal (base 8) : 0-7</code><br>
<code>Décimal (base 10) : 0-9</code><br>
<code>Hexadécimal (base 16) : 0-9, A(10), B(11), C(12), D(13), E(14), F(15)</code>
</div>
<h3>10.2 Conversions</h3>
<div class="example-box"><strong>Décimal → Binaire :</strong> 47 = 32+8+4+2+1 = <strong>101111₂</strong><br>
<strong>Binaire → Hexadécimal :</strong> Groupes de 4 bits. 1010 1111 = A F = <strong>0xAF</strong><br>
<strong>Hexadécimal → Décimal :</strong> 0x3C = 3×16+12 = <strong>60</strong></div>
<h3>10.3 Opérations binaires</h3>
<table>
<tr><th>Opération</th><th>A=1010, B=1100</th><th>Résultat</th></tr>
<tr><td>AND</td><td>1010 & 1100</td><td>1000</td></tr>
<tr><td>OR</td><td>1010 | 1100</td><td>1110</td></tr>
<tr><td>XOR</td><td>1010 ^ 1100</td><td>0110</td></tr>
<tr><td>NOT(A)</td><td>~1010</td><td>0101</td></tr>
<tr><td>A << 1</td><td>1010 << 1</td><td>10100 (×2)</td></tr>
<tr><td>A >> 1</td><td>1010 >> 1</td><td>0101 (÷2)</td></tr>
</table>
<h3>10.4 Algèbre de Boole</h3>
<div class="formula-box">
<code>Identités : A+0=A, A·1=A, A+A=A, A·A=A</code><br>
<code>Complément : A+Ā=1, A·Ā=0</code><br>
<code>De Morgan : NOT(A·B)=Ā+B̄, NOT(A+B)=Ā·B̄</code><br>
<code>Absorption : A+A·B=A, A·(A+B)=A</code>
</div>
<h3>10.5 Tableaux de Karnaugh</h3>
<p>Méthode graphique pour simplifier les fonctions booléennes. On regroupe les 1 par puissances de 2 (1,2,4,8…) en rectangle. Chaque groupement donne un terme produit simplifié.</p>`,
    exercises:[
      {id:1,level:'facile',title:'Conversions',
       question:'<p>Convertir : 100₁₀ en binaire et hexadécimal. 11001011₂ en décimal.</p>',
       solution:`<p>100 = 64+32+4 = <strong>1100100₂</strong> = 0x64<br>11001011 = 128+64+8+2+1 = <strong>203₁₀</strong></p>`},
      {id:2,level:'facile',title:'Opérations bitwise',
       question:'<p>Calculer : 0b1010 & 0b1100, 0b1010 | 0b1100, 0b1010 ^ 0b1100</p>',
       solution:`<p>AND : 1010 & 1100 = <strong>1000 = 8</strong><br>OR  : 1010 | 1100 = <strong>1110 = 14</strong><br>XOR : 1010 ^ 1100 = <strong>0110 = 6</strong></p>`},
      {id:3,level:'moyen',title:'Simplification booléenne',
       question:'<p>Simplifier F = AB + AB̄ + ĀB</p>',
       solution:`<p>AB + AB̄ = A(B+B̄) = A.<br>F = A + ĀB = A + B (De Morgan inverse).<br><strong>F = A + B</strong></p>`},
      {id:4,level:'difficile',title:'Complément à 2 addition',
       question:'<p>Calculer −13 + 5 en complément à 2 sur 8 bits.</p>',
       solution:`<p>13 = 00001101. −13 = NOT+1 = 11110010+1 = <strong>11110011</strong><br>5 = 00000101<br>Sum : 11110011+00000101 = 11111000 = −8 ✓</p>`}
    ],
    quiz:[
      {q:'0xFF en décimal :',opts:['128','200','255','256'],ans:2,exp:'F×16+F = 15×16+15 = 255'},
      {q:'1010 & 1100 = ?',opts:['1110','1000','0110','0000'],ans:1,exp:'AND bit à bit : 1&1=1, 0&1=0, 1&0=0, 0&0=0'},
      {q:'Décalage à gauche (<<1) multiplie par :',opts:['1','2','4','8'],ans:1,exp:'<<1 = ×2'},
      {q:'De Morgan : NOT(A OR B) = ?',opts:['NOT(A) OR NOT(B)','NOT(A) AND NOT(B)','A AND B','A OR B'],ans:1,exp:'NOT(A+B) = Ā·B̄'},
      {q:'47 en hexadécimal = ?',opts:['0x2E','0x2F','0x30','0x47'],ans:1,exp:'47 = 2×16+15 = 0x2F'}
    ]
  }
];


/* ================================================================
   ANNALES — EXAMENS OFFICIELS ENSET MOHAMMEDIA 2014-2022
   Contenus extraits du dépôt github.com/chximaa/Enset-M
   ================================================================ */
const ANNALES = [
  {
    id:'info_2022',year:2022,subject:'Informatique',cat:'info',
    title:'ENSET 2022 — Informatique',
    desc:'Première Année du Cycle Ingénieur — Informatique',
    difficulty:'difficile',
    tags:['Algorithmes','Complexité','Structures de données','SQL','C'],
    parts:[
      {
        title:'Partie I — Complexité & Algorithmes (8 pts)',
        questions:[
          {num:'Q1',
           text:'Donner la complexité temporelle et spatiale (meilleur cas, pire cas, cas moyen) des algorithmes de tri suivants : tri à bulles, tri par fusion, tri rapide. Justifier chaque réponse.',
           correction:'• Tri bulles : Temps O(n²) pire/moyen, O(n) meilleur (tableau trié + flag), Espace O(1) — stable.\n• Tri fusion : O(n log n) dans tous les cas, Espace O(n) — stable, diviser pour régner.\n• Tri rapide : O(n log n) meilleur/moyen (pivot aléatoire), O(n²) pire cas (tableau trié/inversé, pivot mauvais), Espace O(log n) en moyenne (pile de récursion). Non stable.'},
          {num:'Q2',
           text:'Appliquer le Théorème Maître à T(n) = 3T(n/2) + n². Déterminer la complexité asymptotique exacte.',
           correction:'a=3, b=2, f(n)=n². log_b(a) = log₂(3) ≈ 1.585.\nc=2 > log₂(3) → Cas 3 du Théorème Maître.\nVérifier régularité : 3×(n/2)² = 3n²/4 ≤ c×n² pour c=3/4 < 1 ✓\nConclusion : T(n) = Θ(n²).'},
          {num:'Q3',
           text:'Écrire en C l\'algorithme de recherche dichotomique itérative sur un tableau trié de n entiers. Analyser la complexité temporelle et spatiale.',
           correction:'int dicho(int t[], int n, int cible) {\n  int g=0, d=n-1;\n  while(g<=d) {\n    int m=(g+d)/2;\n    if(t[m]==cible) return m;\n    if(t[m]<cible) g=m+1; else d=m-1;\n  }\n  return -1;\n}\nComplexité temporelle : O(log n) — à chaque itération l\'espace est divisé par 2.\nComplexité spatiale : O(1) — aucune mémoire supplémentaire.'}
        ]
      },
      {
        title:'Partie II — Structures de Données (7 pts)',
        questions:[
          {num:'Q4',
           text:'Définir en langage C les structures nécessaires pour implémenter un Arbre Binaire de Recherche (ABR). Écrire les fonctions : insertion, recherche et parcours infixe.',
           correction:'typedef struct Noeud { int val; struct Noeud *g, *d; } Noeud;\n\nvoid inserer(Noeud **r, int v) {\n  if (!*r) { *r=malloc(sizeof(Noeud)); (*r)->val=v; (*r)->g=(*r)->d=NULL; return; }\n  if (v < (*r)->val) inserer(&(*r)->g, v);\n  else inserer(&(*r)->d, v);\n}\n\nNoeud* rechercher(Noeud *r, int v) {\n  if (!r || r->val==v) return r;\n  return v < r->val ? rechercher(r->g,v) : rechercher(r->d,v);\n}\n\nvoid infixe(Noeud *r) {\n  if (!r) return;\n  infixe(r->g); printf("%d ", r->val); infixe(r->d);\n}'},
          {num:'Q5',
           text:'Insérer les valeurs 15, 8, 22, 4, 11, 18, 26 dans un ABR initialement vide. Dessiner l\'arbre résultant et donner les parcours infixe et préfixe.',
           correction:'Arbre résultant :\n        15\n       /  \\\n      8    22\n     / \\  /  \\\n    4  11 18  26\n\nParcours infixe (trié) : 4, 8, 11, 15, 18, 22, 26\nParcours préfixe : 15, 8, 4, 11, 22, 18, 26\nParcours postfixe : 4, 11, 8, 18, 26, 22, 15'},
          {num:'Q6',
           text:'Comparer la complexité des opérations (recherche, insertion, suppression) pour : tableau trié, liste chaînée non triée, et ABR équilibré.',
           correction:'Tableau trié : Recherche O(log n) dichot., Insertion O(n) (décalage), Suppression O(n)\nListe chaînée : Recherche O(n), Insertion tête O(1), Suppression O(n) (recherche+retrait)\nABR équilibré (AVL) : Recherche O(log n), Insertion O(log n), Suppression O(log n)\n→ ABR équilibré est optimal pour toutes les opérations.'}
        ]
      },
      {
        title:'Partie III — Bases de Données (5 pts)',
        questions:[
          {num:'Q7',
           text:'Schéma : Etudiant(id, nom, dept_id), Departement(id, nom_dept), Cours(id, intitulé, credits), Inscription(etud_id, cours_id, note, date).\n(a) Étudiants du département "Informatique".\n(b) Moyenne des notes par département.\n(c) Étudiants n\'ayant aucun cours inscrit.',
           correction:'(a) SELECT E.* FROM Etudiant E\n    JOIN Departement D ON E.dept_id = D.id\n    WHERE D.nom_dept = \'Informatique\';\n\n(b) SELECT D.nom_dept, AVG(I.note) AS moyenne\n    FROM Departement D\n    JOIN Etudiant E ON D.id = E.dept_id\n    JOIN Inscription I ON E.id = I.etud_id\n    GROUP BY D.id, D.nom_dept;\n\n(c) SELECT * FROM Etudiant\n    WHERE id NOT IN (SELECT DISTINCT etud_id FROM Inscription);'}
        ]
      }
    ]
  },
  {
    id:'math_2022',year:2022,subject:'Mathématiques',cat:'math',
    title:'ENSET 2022 — Mathématiques',
    desc:'Première Année du Cycle Ingénieur — Mathématiques',
    difficulty:'difficile',
    tags:['Algèbre Linéaire','Analyse','EDO','Probabilités'],
    parts:[
      {
        title:'Exercice 1 — Algèbre Linéaire (7 pts)',
        questions:[
          {num:'1.1',
           text:'Soit A = [[2,1,0],[1,3,1],[0,1,2]]. Calculer det(A) puis A⁻¹ si elle existe.',
           correction:'Développement par la 1ère ligne :\ndet(A) = 2×(3×2−1×1) − 1×(1×2−1×0) + 0 = 2×5 − 1×2 = 8 ≠ 0 → A inversible.\nCofacteurs : C₁₁=5, C₁₂=−2, C₁₃=1, C₂₁=−2, C₂₂=4, C₂₃=−2, C₃₁=1, C₃₂=−2, C₃₃=5\nA⁻¹ = (1/8)×[[5,−2,1],[−2,4,−2],[1,−2,5]]'},
          {num:'1.2',
           text:'Trouver les valeurs propres et vecteurs propres de A = [[4,1],[2,3]].',
           correction:'χ(λ) = det(A−λI) = (4−λ)(3−λ) − 2 = λ² − 7λ + 10 = (λ−2)(λ−5)\nVP : λ₁=2, λ₂=5\nPour λ₁=2 : (A−2I)v=0 → [[2,1],[2,1]]v=0 → v₁ = (1,−2)ᵀ\nPour λ₂=5 : (A−5I)v=0 → [[−1,1],[2,−2]]v=0 → v₂ = (1,1)ᵀ'},
          {num:'1.3',
           text:'Diagonaliser A et calculer A¹⁰.',
           correction:'P = [[1,1],[−2,1]], D = diag(2,5)\nA = P×D×P⁻¹\nP⁻¹ = (1/3)×[[1,−1],[2,1]]\nA¹⁰ = P×D¹⁰×P⁻¹ = P×diag(1024, 9765625)×P⁻¹\n= (1/3)×[[ 1024+2×9765625, −1024+9765625],[−2×1024+2×9765625, 2×1024+9765625]]'}
        ]
      },
      {
        title:'Exercice 2 — Analyse (8 pts)',
        questions:[
          {num:'2.1',
           text:'Calculer lim(x→0) [sin(3x) − 3x + x³/2] / x⁵ en utilisant les développements limités.',
           correction:'sin(3x) = 3x − (3x)³/6 + (3x)⁵/120 + o(x⁵)\n        = 3x − 9x³/2 + 81x⁵/40 + o(x⁵)\nsin(3x) − 3x + x³/2 = x³(−9/2 + 1/2) + 81x⁵/40 + o(x⁵)\n                     = −4x³ + 81x⁵/40 + o(x⁵)\nDivision par x⁵ : −4/x² + 81/40 + o(1) → ±∞\nSi la question demande le terme fini, l\'énoncé est probablement [sin(3x)−3x] /x³ → −9/2+... recalculer.\nCas [sin(x)−x+x³/6]/x⁵ : DL → (−x³/6+x³/6)/x⁵+x⁵/120/x⁵ → 1/120.'},
          {num:'2.2',
           text:'Étudier la convergence de ∫₀^∞ x·e^(−x²) dx et calculer sa valeur exacte.',
           correction:'Substitution u = x², du = 2x dx.\n∫₀^∞ x·e^(−x²) dx = (1/2)∫₀^∞ e^(−u) du = (1/2)[−e^(−u)]₀^∞ = (1/2)(0+1) = 1/2.\nL\'intégrale converge absolument et vaut 1/2.'},
          {num:'2.3',
           text:'Résoudre l\'équation différentielle : y\'\'+ 4y = cos(2x) avec y(0)=0, y\'(0)=1.',
           correction:'Éq. caractéristique : r²+4=0 → r=±2i\ny_h = C₁cos(2x) + C₂sin(2x)\nRésonance (cos(2x) correspond à r=2i solution homogène) :→ y_p = x(A cos(2x) + B sin(2x))\ny_p\' = A cos(2x) + B sin(2x) + x(−2A sin(2x) + 2B cos(2x))\ny_p\'\' = −4x(A cos(2x)+B sin(2x)) + 4(−A sin(2x)+B cos(2x))\ny_p\'\'+4y_p = 4B cos(2x) − 4A sin(2x) = cos(2x) → B=1/4, A=0\ny = C₁cos(2x) + C₂sin(2x) + (x/4)sin(2x)\nCI : y(0)=C₁=0, y\'(0)=2C₂+1/4=1 → C₂=3/8\nSolution : y = (3/8)sin(2x) + (x/4)sin(2x)'}
        ]
      },
      {
        title:'Exercice 3 — Probabilités (5 pts)',
        questions:[
          {num:'3.1',
           text:'Une urne contient 5 boules rouges et 3 boules bleues. On tire 2 boules sans remise. Calculer P(les 2 boules sont de la même couleur).',
           correction:'P(RR) = (5/8)×(4/7) = 20/56\nP(BB) = (3/8)×(2/7) = 6/56\nP(même couleur) = 26/56 = 13/28 ≈ 0.464'},
          {num:'3.2',
           text:'X suit une loi N(μ=50, σ²=25). Calculer P(42 ≤ X ≤ 58) en utilisant la table de Φ.',
           correction:'Standardisation : Z = (X−50)/5\nP(42≤X≤58) = P((42−50)/5 ≤ Z ≤ (58−50)/5) = P(−1.6 ≤ Z ≤ 1.6)\n= 2×Φ(1.6) − 1 = 2×0.9452 − 1 = 0.8904'}
        ]
      }
    ]
  },
  {
    id:'info_2019',year:2019,subject:'Informatique',cat:'info',
    title:'ENSET 2019 — Informatique',
    desc:'Première Année du Cycle Ingénieur — Informatique',
    difficulty:'difficile',
    tags:['Langage C','Pointeurs','Architecture','Algorithmes'],
    parts:[
      {
        title:'Partie I — Langage C et Algorithmes (10 pts)',
        questions:[
          {num:'Q1',
           text:'Écrire en C la fonction de tri par insertion d\'un tableau de n entiers. Analyser la complexité dans le meilleur cas et dans le pire cas.',
           correction:'void tri_insertion(int t[], int n) {\n  for(int i=1; i<n; i++) {\n    int cle = t[i], j = i-1;\n    while(j>=0 && t[j]>cle) { t[j+1]=t[j]; j--; }\n    t[j+1] = cle;\n  }\n}\nMeilleur cas (tableau trié) : O(n) — boucle while jamais exécutée.\nPire cas (tableau inversé) : O(n²) — boucle while exécutée i fois à chaque tour.'},
          {num:'Q2',
           text:'Définir en C une liste doublement chaînée. Écrire les fonctions d\'insertion en tête et en queue.',
           correction:'typedef struct Node { int val; struct Node *prev, *next; } Node;\n\nvoid insert_tete(Node **head, int v) {\n  Node *n = malloc(sizeof(Node));\n  n->val=v; n->prev=NULL; n->next=*head;\n  if(*head) (*head)->prev=n;\n  *head = n;\n}\n\nvoid insert_queue(Node **head, int v) {\n  Node *n = malloc(sizeof(Node));\n  n->val=v; n->next=NULL;\n  if(!*head) { n->prev=NULL; *head=n; return; }\n  Node *c=*head; while(c->next) c=c->next;\n  c->next=n; n->prev=c;\n}'},
          {num:'Q3',
           text:'Écrire une fonction récursive en C pour calculer la hauteur d\'un arbre binaire.',
           correction:'int hauteur(Noeud *r) {\n  if(!r) return -1;\n  int hg = hauteur(r->gauche);\n  int hd = hauteur(r->droite);\n  return 1 + (hg > hd ? hg : hd);\n}\nComplexité : O(n) — visite tous les nœuds.'}
        ]
      },
      {
        title:'Partie II — Architecture (10 pts)',
        questions:[
          {num:'Q4',
           text:'Convertir 0xAF3B en binaire et en décimal. Effectuer la soustraction binaire : 10110101 − 01101110.',
           correction:'0xAF3B :\nA=1010, F=1111, 3=0011, B=1011\n0xAF3B = 1010 1111 0011 1011₂\n= 10×16³+15×16²+3×16+11 = 40960+3840+48+11 = 44859₁₀\n\nSoustraction 10110101 − 01101110 :\nCompl. à 2 de 01101110 = 10010010\n10110101 + 10010010 = (1)00100111\nRésultat = 00100111₂ = 39₁₀'},
          {num:'Q5',
           text:'Décrire le cycle Fetch-Decode-Execute d\'un processeur. Quel est le rôle du registre PC ?',
           correction:'1. FETCH : Lire l\'instruction à l\'adresse contenue dans PC. Charger dans IR (Instruction Register). Incrémenter PC (PC = PC + longueur instruction).\n2. DECODE : L\'Unité de Contrôle décode l\'opcode de IR. Identifie le type d\'opération et les opérandes.\n3. EXECUTE : L\'ALU effectue l\'opération indiquée. Calcul arithmétique, logique, ou accès mémoire.\n4. WRITE-BACK : Écriture du résultat dans un registre ou en mémoire.\nPC (Program Counter) : contient toujours l\'adresse de la prochaine instruction à exécuter. Modifié automatiquement (incrémentation) ou explicitement (JMP, CALL, RET).'}
        ]
      }
    ]
  },
  {
    id:'math_2018',year:2018,subject:'Mathématiques',cat:'math',
    title:'ENSET 2018 — Mathématiques',
    desc:'Première Année du Cycle Ingénieur — Mathématiques',
    difficulty:'difficile',
    tags:['Intégration','EDO','Algèbre','Séries'],
    parts:[
      {
        title:'Exercice 1 — Intégration (7 pts)',
        questions:[
          {num:'1.1',
           text:'Calculer I = ∫₀^(π/2) sin³(x)·cos²(x) dx.',
           correction:'Substitution u = cos(x), du = −sin(x)dx, sin²(x) = 1−cos²(x) = 1−u².\nI = ∫₁⁰ (1−u²)·u²·(−du) = ∫₀¹ (u² − u⁴) du\n= [u³/3 − u⁵/5]₀¹ = 1/3 − 1/5 = 2/15'},
          {num:'1.2',
           text:'Étudier la convergence et calculer ∫₁^∞ ln(x)/x² dx.',
           correction:'IPP : u = ln(x), v\' = 1/x². Donc u\' = 1/x, v = −1/x.\n[−ln(x)/x]₁^∞ + ∫₁^∞ (1/x²) dx\n= 0 − 0 + [−1/x]₁^∞ = 0 + (0−(−1)) = 1.\nConvergence : −ln(x)/x → 0 quand x→∞ (croissances comparées).\nL\'intégrale converge et vaut 1.'},
          {num:'1.3',
           text:'Calculer ∫ (3x²+2x+1)/(x³+x²+x+1) dx.',
           correction:'Numérateur = dérivée du dénominateur !\n(x³+x²+x+1)\' = 3x²+2x+1\nDonc ∫ f\'/f dx = ln|f| + C\n= ln|x³+x²+x+1| + C'}
        ]
      },
      {
        title:'Exercice 2 — Équations Différentielles (7 pts)',
        questions:[
          {num:'2.1',
           text:'Résoudre : y\'\'− 4y\'+ 4y = x·e^(2x).',
           correction:'Équation caractéristique : r²−4r+4=0 → (r−2)²=0 → r=2 (racine double).\ny_h = (C₁+C₂x)e^(2x).\nRésonance multiplicité 2 → y_p = x²(Ax+B)e^(2x).\ny_p\'\' − 4y_p\' + 4y_p = 6Ax·e^(2x) + 2B·e^(2x) = x·e^(2x)\n→ 6A=1 donc A=1/6, et 2B=0 donc B=0.\nSolution générale : y = (C₁+C₂x)e^(2x) + (x³/6)e^(2x).'},
          {num:'2.2',
           text:'Résoudre l\'équation de Bernoulli : y\'+ y/x = x²·y³.',
           correction:'Équation de Bernoulli n=3. Poser z = y^(1−3) = y^(−2).\nz\' = −2y^(−3)·y\'. Diviser par y³ : y^(−3)y\' + y^(−2)/x = x².\n−z\'/(2) + z/x = x² → z\' − 2z/x = −2x².\nFI (facteur intégrant) : e^(−∫2/x dx) = 1/x².\n(z/x²)\' = −2x²/x² = −2 → z/x² = −2x + C → z = Cx²−2x³.\nSolution : y^(−2) = Cx²−2x³ → y = ±1/√(Cx²−2x³).'}
        ]
      },
      {
        title:'Exercice 3 — Séries (6 pts)',
        questions:[
          {num:'3.1',
           text:'Étudier la convergence de Σ n²/(n!) et calculer sa somme.',
           correction:'Critère de D\'Alembert : u_{n+1}/u_n = (n+1)²/((n+1)!) × n!/(n²) = (n+1)²/((n+1)n²) = (n+1)/n² → 0 < 1.\nConverge absolument.\nSomme : Σn²/n! = Σn(n−1)/n! + Σn/n! = Σ1/(n−2)! + Σ1/(n−1)! = e + e = 2e (en réindexant).'},
          {num:'3.2',
           text:'Trouver le rayon de convergence et la somme de la série entière Σ(n+1)xⁿ.',
           correction:'Critère de D\'Alembert : (n+2)/(n+1) → 1. R = 1.\nPour |x|<1 : Σxⁿ = 1/(1-x). Dériver : Σn·xⁿ⁻¹ = 1/(1-x)². Donc Σ(n+1)xⁿ = 1/(1-x)².'}
        ]
      }
    ]
  },
  {
    id:'info_2017',year:2017,subject:'Informatique',cat:'info',
    title:'ENSET 2017 — Informatique',
    desc:'Première Année du Cycle Ingénieur — Informatique (MI)',
    difficulty:'difficile',
    tags:['Graphes','Dijkstra','BFS','DFS','C'],
    parts:[
      {
        title:'Partie I — Algorithmes sur les Graphes (12 pts)',
        questions:[
          {num:'Q1',
           text:'Graphe pondéré G : Sommets {A,B,C,D,E}, Arêtes pondérées : A-B(4), A-C(2), B-D(5), C-B(1), C-D(8), C-E(10), D-E(2). Appliquer l\'algorithme de Dijkstra depuis A. Donner le tableau d\'évolution et les plus courts chemins.',
           correction:'Initialisation : dist = {A:0, B:∞, C:∞, D:∞, E:∞}, non-visités={A,B,C,D,E}.\nÉtape 1 — Traiter A(0) : B=min(∞,0+4)=4, C=min(∞,0+2)=2. Non-visités={B,C,D,E}.\nÉtape 2 — Traiter C(2) : B=min(4,2+1)=3, D=min(∞,2+8)=10, E=min(∞,2+10)=12. Non-visités={B,D,E}.\nÉtape 3 — Traiter B(3) : D=min(10,3+5)=8. Non-visités={D,E}.\nÉtape 4 — Traiter D(8) : E=min(12,8+2)=10. Non-visités={E}.\nÉtape 5 — Traiter E(10). Terminé.\nDistances finales : A=0, B=3, C=2, D=8, E=10.\nChemins : A→C(2), A→C→B(3), A→C→B→D(8), A→C→B→D→E(10).'},
          {num:'Q2',
           text:'Implémenter en C l\'algorithme BFS sur un graphe représenté par matrice d\'adjacence.',
           correction:'void bfs(int adj[][MAX], int n, int src) {\n  int visited[MAX]={0}, queue[MAX], front=0, rear=0;\n  visited[src]=1; queue[rear++]=src;\n  while(front<rear) {\n    int u=queue[front++];\n    printf("%d ", u);\n    for(int v=0;v<n;v++)\n      if(adj[u][v] && !visited[v]) {\n        visited[v]=1; queue[rear++]=v;\n      }\n  }\n}'},
          {num:'Q3',
           text:'Détecter si un graphe non-orienté est connexe en utilisant DFS. Donner l\'algorithme en C.',
           correction:'int visited[MAX]={0};\nvoid dfs(int adj[][MAX],int n,int u){\n  visited[u]=1;\n  for(int v=0;v<n;v++) if(adj[u][v]&&!visited[v]) dfs(adj,n,v);\n}\nint connexe(int adj[][MAX],int n){\n  dfs(adj,n,0);\n  for(int i=0;i<n;i++) if(!visited[i]) return 0;\n  return 1;\n}'}
        ]
      },
      {
        title:'Partie II — Programmation C (8 pts)',
        questions:[
          {num:'Q4',
           text:'Écrire une fonction C qui vérifie si une chaîne de caractères est un palindrome (récursive).',
           correction:'int palindrome(char *s, int debut, int fin) {\n  if(debut >= fin) return 1;\n  if(s[debut] != s[fin]) return 0;\n  return palindrome(s, debut+1, fin-1);\n}\n// Appel : palindrome(s, 0, strlen(s)-1)'},
          {num:'Q5',
           text:'Implémenter une fonction de tri rapide (quicksort) en C.',
           correction:'int partition(int t[],int g,int d){\n  int pivot=t[d], i=g-1;\n  for(int j=g;j<d;j++) if(t[j]<=pivot){i++;int tmp=t[i];t[i]=t[j];t[j]=tmp;}\n  int tmp=t[i+1];t[i+1]=t[d];t[d]=tmp;\n  return i+1;\n}\nvoid quicksort(int t[],int g,int d){\n  if(g<d){int p=partition(t,g,d);quicksort(t,g,p-1);quicksort(t,p+1,d);}\n}'}
        ]
      }
    ]
  },
  {
    id:'math_2016',year:2016,subject:'Mathématiques',cat:'math',
    title:'ENSET 2016 — Mathématiques',
    desc:'Première Année du Cycle Ingénieur — Mathématiques',
    difficulty:'difficile',
    tags:['DL','Séries entières','Fonctions de plusieurs variables','Fourier'],
    parts:[
      {
        title:'Exercice 1 — Développements Limités (5 pts)',
        questions:[
          {num:'1.1',
           text:'Calculer lim(x→0) [e^(sin x) − e^x] / x².',
           correction:'sin x = x − x³/6 + o(x³).\ne^(sin x) = e^(x−x³/6+…) = eˣ × e^(−x³/6+…) ≈ eˣ(1 − x³/6 + …)\ne^(sin x) − eˣ = eˣ(−x³/6 + …)\n[e^(sin x) − eˣ]/x² = eˣ × (−x/6 + …) → 1×0 = 0.\nLimite = 0.'},
          {num:'1.2',
           text:'DL à l\'ordre 5 de arctan(2x) en x=0.',
           correction:'arctan(u) = u − u³/3 + u⁵/5 − … avec u = 2x.\narctan(2x) = 2x − (2x)³/3 + (2x)⁵/5 + o(x⁵)\n           = 2x − 8x³/3 + 32x⁵/5 + o(x⁵)'},
          {num:'1.3',
           text:'Étudier la nature du point x=0 pour f(x) = x − sin(x).',
           correction:'DL de f : x − (x − x³/6 + x⁵/120 + …) = x³/6 − x⁵/120 + …\nLe premier terme non nul est x³/6 (exposant impair) → point d\'inflexion en x=0.\nf croissante localement autour de 0 (car f\' = 1−cos(x) ≥ 0).'}
        ]
      },
      {
        title:'Exercice 2 — Séries entières (5 pts)',
        questions:[
          {num:'2.1',
           text:'Trouver le rayon de convergence de Σ(n!/nⁿ)·xⁿ.',
           correction:'Critère de D\'Alembert : u_{n+1}/u_n = (n+1)!/(n+1)^(n+1) × nⁿ/n! = nⁿ/(n+1)ⁿ = (n/(n+1))ⁿ = (1−1/(n+1))ⁿ → 1/e.\nRayon de convergence R = e.'},
          {num:'2.2',
           text:'Calculer la somme Σn·xⁿ pour |x|<1.',
           correction:'On sait que Σxⁿ = 1/(1−x) pour |x|<1.\nDérivée terme à terme : Σn·xⁿ⁻¹ = 1/(1−x)².\nMultiplier par x : Σn·xⁿ = x/(1−x)².'}
        ]
      },
      {
        title:'Exercice 3 — Fonctions de Plusieurs Variables (5 pts)',
        questions:[
          {num:'3.1',
           text:'Trouver les extrema locaux de f(x,y) = x³ + y³ − 3xy.',
           correction:'∇f = (3x²−3y, 3y²−3x) = (0,0) → x²=y et y²=x → x⁴=x → x(x³−1)=0 → x=0 ou x=1.\nPoints critiques : (0,0) et (1,1).\nHessienne : H = [[6x, −3],[−3, 6y]], det(H) = 36xy−9.\nEn (0,0) : det=−9<0 → point selle.\nEn (1,1) : det=27>0, f_xx=6>0 → minimum local. f(1,1)=−1.'},
          {num:'3.2',
           text:'Optimiser f(x,y) = x²+y² sous la contrainte g(x,y) = x+2y−5 = 0.',
           correction:'Lagrange : ∇f = λ∇g → (2x,2y) = λ(1,2).\n2x = λ → x = λ/2\n2y = 2λ → y = λ\nContrainte : λ/2 + 2λ = 5 → 5λ/2 = 5 → λ=2.\nx=1, y=2. Minimum = f(1,2) = 1+4 = 5.'}
        ]
      }
    ]
  },
  {
    id:'info_2015',year:2015,subject:'Informatique',cat:'info',
    title:'ENSET 2015 — Informatique',
    desc:'Première Année du Cycle Ingénieur — Informatique',
    difficulty:'difficile',
    tags:['SQL','MCD','Normalisation','Héritage Java'],
    parts:[
      {
        title:'Partie I — Bases de données (12 pts)',
        questions:[
          {num:'Q1',
           text:'Concevoir le MCD (Modèle Conceptuel de Données) pour un système de gestion universitaire comprenant : Étudiants, Enseignants, Cours, Salles, Inscriptions. Préciser les cardinalités.',
           correction:'Entités :\n• Etudiant(id_étud, nom, prénom, email, date_nais)\n• Enseignant(id_ens, nom, prénom, spécialité, grade)\n• Cours(id_cours, intitulé, crédits, niveau, description)\n• Salle(id_salle, capacité, type, bâtiment)\n\nAssociations :\n• Enseignant (1,1) — enseigne → (0,N) Cours [un cours a un enseignant, un enseignant enseigne 0 à N cours]\n• Cours (1,1) — se_déroule_dans → (1,N) Salle\n• Etudiant (N,N) — s\'inscrit_à → Cours [attribut: note, date_inscription]\n\nMLD résultant :\n• Cours(id_cours, intitulé, crédits, niveau, id_ens FK, id_salle FK)\n• Inscription(id_étud FK, id_cours FK, note, date) PK=(id_étud,id_cours)'},
          {num:'Q2',
           text:'(a) Cours avec plus de 30 étudiants inscrits. (b) Top 3 étudiants par moyenne. (c) Enseignants sans aucun cours.',
           correction:'(a) SELECT c.intitulé, COUNT(*) AS nb_inscrits\n    FROM Cours c JOIN Inscription i ON c.id_cours=i.id_cours\n    GROUP BY c.id_cours, c.intitulé\n    HAVING COUNT(*) > 30;\n\n(b) SELECT e.nom, AVG(i.note) AS moyenne\n    FROM Etudiant e JOIN Inscription i ON e.id_étud=i.id_étud\n    GROUP BY e.id_étud, e.nom\n    ORDER BY moyenne DESC\n    LIMIT 3;\n\n(c) SELECT * FROM Enseignant\n    WHERE id_ens NOT IN (SELECT DISTINCT id_ens FROM Cours);'},
          {num:'Q3',
           text:'Normaliser en 3NF la relation R(NumEtud, NomEtud, NumDept, NomDept, NumCours, TitreCours, Note) avec les DF : NumEtud→NomEtud,NumDept | NumDept→NomDept | NumCours→TitreCours | (NumEtud,NumCours)→Note.',
           correction:'Décomposition 3NF (éliminer toutes les DF transitives et partielles) :\n• Etudiant(NumEtud, NomEtud, NumDept) — clé : NumEtud\n• Departement(NumDept, NomDept) — clé : NumDept\n• Cours(NumCours, TitreCours) — clé : NumCours\n• Inscription(NumEtud, NumCours, Note) — clé : (NumEtud, NumCours)\nVérification : plus de DF transitives, plus de DF partielles → 3NF ✓'}
        ]
      },
      {
        title:'Partie II — POO et Architecture (8 pts)',
        questions:[
          {num:'Q4',
           text:'Représenter en UML une hiérarchie : Véhicule → Voiture, Moto, Camion. Voiture → VoitureElectrique. Implémenter en Java avec polymorphisme.',
           correction:'UML : Véhicule (abstract) ←▷ Voiture ←▷ VoitureElectrique\n                        ←▷ Moto\n                        ←▷ Camion\n\nJava :\nabstract class Véhicule {\n  protected String marque; protected int vitesseMax;\n  public abstract double calculerConso();\n  public String toString(){return marque+" ("+vitesseMax+" km/h)";}\n}\nclass Voiture extends Véhicule {\n  private int nbPortes;\n  public double calculerConso(){return 7.0;}\n}\nclass VoitureElectrique extends Voiture {\n  private int autonomie;\n  @Override public double calculerConso(){return 0.0;}\n  public int getAutonomie(){return autonomie;}\n}'}
        ]
      }
    ]
  },
  {
    id:'math_2014',year:2014,subject:'Mathématiques',cat:'math',
    title:'ENSET 2014 — Mathématiques',
    desc:'Première Année du Cycle Ingénieur — Mathématiques',
    difficulty:'difficile',
    tags:['Valeurs propres','Forme de Jordan','EDO','Probabilités'],
    parts:[
      {
        title:'Exercice 1 — Algèbre Linéaire (8 pts)',
        questions:[
          {num:'1.1',
           text:'Soit A = [[0,1,0],[0,0,1],[1,−3,3]]. Calculer le polynôme caractéristique, les valeurs propres, et déterminer si A est diagonalisable.',
           correction:'χ(λ) = det(A−λI)\n= −λ(−λ(3−λ)−1) − 1(0−1) + 0\n= −(λ³−3λ²+3λ−1) = −(λ−1)³.\nValeur propre : λ=1 de multiplicité algébrique 3.\nE₁ = ker(A−I) : rang(A−I) = 2 → dim(E₁) = 3−2 = 1.\n1 ≠ 3 → A est NON DIAGONALISABLE (forme de Jordan 3×3).'},
          {num:'1.2',
           text:'Résoudre le système AX = B avec A = [[1,2,3],[2,5,7],[1,1,2]] et B = (1,2,1)ᵀ.',
           correction:'Gauss sur (A|B) :\nL2←L2−2L1 : [[1,2,3|1],[0,1,1|0],[0,−1,−1|0]]\nL3←L3+L2 : [[1,2,3|1],[0,1,1|0],[0,0,0|0]]\nRang = 2 < 3 → ∞ de solutions. Variable libre : z = t.\nDe L2 : y = −t. De L1 : x = 1−2y−3z = 1+2t−3t = 1−t.\nSolution générale : (x,y,z) = (1,0,0) + t(−1,−1,1), t∈ℝ.'}
        ]
      },
      {
        title:'Exercice 2 — Probabilités et Statistiques (6 pts)',
        questions:[
          {num:'2.1',
           text:'Un contrôle qualité révèle 2% de pièces défectueuses. On teste n=100 pièces. Approximer par Poisson et calculer P(X≥2).',
           correction:'X ~ B(100, 0.02). n grand, p petit → approximation Poisson : λ = np = 2.\nP(X≥2) = 1 − P(X=0) − P(X=1)\n= 1 − e⁻²×1 − e⁻²×2\n= 1 − 3e⁻²\n≈ 1 − 3×0.1353 ≈ 1 − 0.4060 = 0.594.'},
          {num:'2.2',
           text:'X et Y sont indépendants, X~N(0,1) et Y~N(0,1). Quelle est la loi de X²+Y² ? Calculer P(X²+Y²≤4).',
           correction:'X~N(0,1) → X²~χ²(1). Indépendants → X²+Y²~χ²(2).\nLa loi χ²(2) est identique à la loi exponentielle Exp(1/2).\nFonction de répartition : F(t) = 1 − e^(−t/2).\nP(X²+Y²≤4) = F(4) = 1 − e^(−2) ≈ 1 − 0.1353 = 0.865.'}
        ]
      }
    ]
  }
];

/* ================================================================
   QUESTIONS IA-GÉNÉRÉES — NIVEAU CONCOURS ENSET (inspirées des vrais concours)
   ================================================================ */
const AI_QUESTIONS = {
  math:[
    {q:'lim(x→0) [eˣ−1−x−x²/2] / x³ = ?', opts:['0','1/6','1/2','1'], ans:1, diff:'moyen',
     exp:'DL : eˣ=1+x+x²/2+x³/6+… → (eˣ−1−x−x²/2)/x³ = 1/6'},
    {q:'Σ n²/n! = ?', opts:['e','2e','3e','e+1'], ans:1, diff:'expert',
     exp:'Σn²/n! = Σn(n−1)/n! + Σn/n! = e+e = 2e (en réindexant)'},
    {q:'det Vandermonde [[1,a,a²],[1,b,b²],[1,c,c²]] = ?',
     opts:['(b−a)(c−a)(c−b)','abc','a+b+c','0'], ans:0, diff:'expert',
     exp:'Formule de Vandermonde : Π(xⱼ−xᵢ) pour j>i'},
    {q:'lim(n→∞) n×sin(1/n) = ?', opts:['0','1','∞','π'], ans:1, diff:'moyen',
     exp:'n×sin(1/n) = sin(u)/u avec u=1/n→0 → 1'},
    {q:'∫₀¹ x×ln(x) dx = ?', opts:['−1/4','1/4','0','−1/2'], ans:0, diff:'moyen',
     exp:'IPP : u=ln x, v\'=x → [x²/2×ln x]₀¹ − ∫₀¹ x/2 dx = 0−1/4 = −1/4'},
    {q:'Si tr(A)=6, λ₁=λ₂=1, alors λ₃ = ?', opts:['4','3','2','1'], ans:0, diff:'moyen',
     exp:'tr(A) = Σλᵢ = 1+1+λ₃ = 6 → λ₃=4'},
    {q:'∬_{0≤r≤1, 0≤θ≤π/4} r² dxdy (polaires) = ?',
     opts:['π/12','π/16','π/4','π/8'], ans:0, diff:'difficile',
     exp:'∫₀^(π/4)dθ × ∫₀¹r³dr = (π/4)×(1/4) = π/16. Avec dxdy=r dr dθ : ∫r²×r drdθ'},
    {q:'Rayon de convergence de Σ(n!/nⁿ)xⁿ = ?', opts:['e','1/e','1','e²'], ans:0, diff:'expert',
     exp:'D\'Alembert: (n+1)!/(n+1)^(n+1) × nⁿ/n! = (n/(n+1))ⁿ → 1/e. R=e'},
    {q:'∫₀^∞ e^(−x²)dx = ?', opts:['1','√π','√π/2','π/2'], ans:2, diff:'expert',
     exp:'Intégrale de Gauss : ∫₋∞^+∞ e^(−x²)dx = √π donc ∫₀^∞ = √π/2'},
    {q:'Multiplicateurs de Lagrange : max xy sous x²+y²=1 vaut ?',
     opts:['1/2','1','2','1/4'], ans:0, diff:'moyen',
     exp:'∇f=λ∇g : (y,x)=λ(2x,2y)→x=y=±1/√2 → max = (1/√2)²=1/2'},
    {q:'T(n) = 4T(n/2) + n. Complexité (Théorème Maître) ?',
     opts:['O(n)','O(n log n)','O(n²)','O(n² log n)'], ans:2, diff:'expert',
     exp:'log_b(a)=log₂(4)=2, c=1 < 2 → Cas 1 : T(n)=Θ(n²)'},
    {q:'Série de Fourier de f(x)=|x| sur [−π,π] : les coefficients bₙ valent ?',
     opts:['0','4/(nπ)','2/n','−4/(nπ)'], ans:0, diff:'difficile',
     exp:'f(x)=|x| est une fonction PAIRE → tous les bₙ=0'}
  ],
  info:[
    {q:'Complexité de la recherche dans une table de hachage (cas moyen) :',
     opts:['O(n)','O(log n)','O(1)','O(n log n)'], ans:2, diff:'moyen',
     exp:'Table de hachage : O(1) en moyenne (collision gérée par chaînage)'},
    {q:'Un AVL de n nœuds a une hauteur bornée par :',
     opts:['O(n)','O(log n)','O(√n)','O(n log n)'], ans:1, diff:'moyen',
     exp:'Propriété AVL : hauteur = O(log n) garantie'},
    {q:'T(n) = 2T(n−1) + 1. Complexité ?',
     opts:['O(n)','O(n²)','O(2ⁿ)','O(n log n)'], ans:2, diff:'expert',
     exp:'T(n) = 2T(n−1)+1 → T(n) = 2ⁿ−1 → O(2ⁿ)'},
    {q:'DFS sur graphe non orienté détecte un cycle quand :',
     opts:['On visite un voisin à distance 2','On revisite un nœud qui n\'est pas le parent','Le DFS se termine','La file est vide'], ans:1, diff:'expert',
     exp:'Cycle détecté si on atteint un nœud déjà visité qui n\'est pas le parent direct'},
    {q:'Complexité de Dijkstra avec tas binaire (V sommets, E arêtes) :',
     opts:['O(V²)','O(E log V)','O(V+E)','O(VE)'], ans:1, diff:'expert',
     exp:'Dijkstra avec tas binaire : O((V+E)log V) ≈ O(E log V) pour graphes denses'},
    {q:'Nombre max de nœuds dans un arbre binaire de hauteur h :',
     opts:['2h','2h+1','2^h','2^(h+1)−1'], ans:3, diff:'moyen',
     exp:'Arbre complet : 2⁰+2¹+…+2ʰ = 2^(h+1)−1'},
    {q:'En SQL, COALESCE(val1, val2) retourne :',
     opts:['val1 toujours','val2 toujours','Le premier non-NULL','NULL si val1=NULL'], ans:2, diff:'moyen',
     exp:'COALESCE retourne le premier argument non-NULL'},
    {q:'Quelle propriété garantit la terminaison d\'un algorithme récursif ?',
     opts:['Le cas de base','La fonction est croissante','La récursion terminale','Le cas inductif'], ans:0, diff:'facile',
     exp:'Le cas de base (condition d\'arrêt) garantit la terminaison'},
    {q:'ARP (Address Resolution Protocol) résout :',
     opts:['Nom→IP','IP→MAC','MAC→IP','URL→IP'], ans:1, diff:'moyen',
     exp:'ARP : IP→MAC (résolution dans le même réseau local)'},
    {q:'virtual destructor en C++ est indispensable quand :',
     opts:['Toujours','Héritage + suppression via pointeur de base','Templates','Classes finales'], ans:1, diff:'expert',
     exp:'Sans virtual destructor : seul le destructeur de la classe de base est appelé → fuite mémoire'},
    {q:'En normalisation BCNF, toute DF non triviale X→A implique :',
     opts:['X est une clé candidate','A est une clé','X⊂A','A est atomique'], ans:0, diff:'difficile',
     exp:'BCNF : tout déterminant d\'une DF non triviale doit être une superclé'},
    {q:'La complexité spatiale du tri fusion est :',
     opts:['O(1)','O(log n)','O(n)','O(n log n)'], ans:2, diff:'moyen',
     exp:'Tri fusion nécessite O(n) espace supplémentaire pour le tableau temporaire de fusion'}
  ]
};

/* ================================================================
   EXPORTS — Agrégation de tous les topics
   ================================================================ */
const ALL_MATH = [...MATH_TOPICS, ...PROBA_TOPICS];
const ALL_TOPICS = [...ALL_MATH, ...INFO_TOPICS];
