'use strict';
/* ==============================================================
   ENSET MOHAMMEDIA – PLATEFORME DE RÉVISION CI DATA ENGINEERING
   Contenu pédagogique complet + Logique interactive
   ============================================================== */

const MATH_TOPICS = [
  {
    id:'fonctions', cat:'math', icon:'ƒ', color:'#F5A8B8',
    title:'Fonctions – Limites, Continuité, Dérivabilité',
    subtitle:'Domaines · Limites · TVI · Règles de dérivation',
    course:`
<h2>1. Fonctions – Limites, Continuité, Dérivabilité</h2>
<h3>1.1 Domaine de définition</h3>
<p>Le domaine de définition <strong>D<sub>f</sub></strong> est l'ensemble des réels pour lesquels f(x) est définie.</p>
<div class="def-box"><strong>Définition :</strong> D<sub>f</sub> = { x ∈ ℝ | f(x) existe }</div>
<p><strong>Cas courants à exclure :</strong></p>
<ul>
  <li>Dénominateur ≠ 0 → ex : f(x)=1/(x−2), x≠2</li>
  <li>Radicande ≥ 0 → ex : f(x)=√(x−1), x≥1</li>
  <li>Argument du log > 0 → ex : ln(x+3), x>−3</li>
</ul>
<h3>1.2 Limites et formes indéterminées</h3>
<div class="def-box"><strong>Définition ε−δ :</strong> lim<sub>x→a</sub>f(x)=L si : ∀ε>0, ∃δ>0, |x−a|&lt;δ ⟹ |f(x)−L|&lt;ε</div>
<div class="theorem-box"><strong>Règle de L'Hôpital :</strong> Si lim f/g = 0/0 ou ∞/∞, alors lim f/g = lim f'/g'.</div>
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
<div class="def-box"><strong>Définition :</strong> f'(a) = lim<sub>h→0</sub>[f(a+h)−f(a)]/h</div>
<table>
<tr><th>f(x)</th><th>f'(x)</th><th>f(x)</th><th>f'(x)</th></tr>
<tr><td>xⁿ</td><td>nxⁿ⁻¹</td><td>sin x</td><td>cos x</td></tr>
<tr><td>eˣ</td><td>eˣ</td><td>cos x</td><td>−sin x</td></tr>
<tr><td>ln x</td><td>1/x</td><td>tan x</td><td>1/cos²x</td></tr>
<tr><td>arcsin x</td><td>1/√(1−x²)</td><td>arctan x</td><td>1/(1+x²)</td></tr>
</table>
<div class="formula-box">
<code>(uv)' = u'v + uv' | (u/v)' = (u'v−uv')/v² | (f∘g)'(x) = f'(g(x))·g'(x)</code>
</div>
<h3>1.5 Étude complète</h3>
<ol><li>Domaine D<sub>f</sub></li><li>Parité</li><li>Limites aux bornes (asymptotes)</li><li>f', signe, tableau de variations</li><li>f'', concavité, points d'inflexion</li><li>Tracé</li></ol>
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
       solution:`<p>f'(x) = [−sin(x²)·2x]/cos(x²) = <strong>−2x·tan(x²)</strong></p>`},
      {id:7,level:'difficile',title:'Application du TVI',
       question:'<p>Montrer que f(x)=x⁵+3x−5 admet une unique racine réelle.</p>',
       solution:`<p>f(1)=−1&lt;0, f(2)=33>0 → racine dans ]1,2[ (TVI).<br>f'(x)=5x⁴+3>0 → f strictement croissante → <strong>unicité</strong>.</p>`},
      {id:8,level:'difficile',title:'Étude de fonction complète',
       question:'<p>Étudier f(x)=x·e^(−x) : variations, extrema, asymptotes.</p>',
       solution:`<p>D<sub>f</sub>=ℝ. lim<sub>x→+∞</sub>=0 (AH y=0). lim<sub>x→−∞</sub>=−∞.<br>f'(x)=e^(−x)(1−x) → f croissante sur ]−∞,1[, max en x=1 : f(1)=e⁻¹.<br>f''(x)=e^(−x)(x−2) → inflexion en x=2.</p>`}
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
<li><strong>Addition :</strong> terme à terme jusqu'à l'ordre n</li>
<li><strong>Multiplication :</strong> produit, on tronque à l'ordre n</li>
<li><strong>Composition :</strong> substituer le DL intérieur</li>
<li><strong>Intégration :</strong> terme à terme (ordre augmente de 1)</li>
</ul>
<h3>Applications</h3>
<div class="example-box"><strong>Calcul de limite :</strong> lim(x→0)(sin x−x)/x³<br>sin x = x−x³/6+o(x³) → (sin x−x)/x³ = −1/6 + o(1) → <strong>−1/6</strong></div>
<div class="theorem-box"><strong>Équivalents fondamentaux (x→0) :</strong> sin x∼x, 1−cos x∼x²/2, ln(1+x)∼x, eˣ−1∼x, tan x∼x</div>
<div class="theorem-box"><strong>Étude d'extrema :</strong> Si DL de f−f(a) = aₖ(x−a)ᵏ+…, aₖ≠0 :<br>k pair, aₖ>0 → minimum | k pair, aₖ&lt;0 → maximum | k impair → inflexion</div>
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
       solution:`<p>f(x)=sin x−x+x³/6. f(0)=0. f'(x)=cos x−1+x²/2≥0 (car 1−cos x≤x²/2). Donc f croissante ≥ 0. ∎</p>`}
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
<h3>4.1 Méthodes d'intégration</h3>
<h4>a) Intégration par Parties (IPP)</h4>
<div class="formula-box"><code>∫ u·v' dx = [u·v] − ∫ u'·v dx</code></div>
<p><strong>Règle LIATE :</strong> u = Logarithme, Inverse trig, Algébrique, Trig, Exponentielle (dans cet ordre).</p>
<div class="example-box"><strong>Exemple :</strong> ∫ x·eˣ dx. u=x, v'=eˣ → <strong>eˣ(x−1)+C</strong></div>
<h4>b) Changement de variable</h4>
<div class="formula-box"><code>t = g(x) → dt = g'(x)dx → ∫f(g(x))g'(x)dx = ∫f(t)dt</code></div>
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
      {q:'Règle d\'IPP :',opts:['∫uv=∫u·∫v','∫uv\'=uv−∫u\'v','∫uv=u\'v\'−uv','∫u\'v\'=uv'],ans:1,exp:'∫u·v\'=[uv]−∫u\'·v'},
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
<h3>5.1 EDO d'ordre 1</h3>
<h4>Variables séparables : y' = f(x)g(y)</h4>
<div class="formula-box"><code>dy/g(y) = f(x)dx → intégrer des deux côtés</code></div>
<div class="example-box"><strong>Exemple :</strong> y'=xy, y(0)=1 → y=e^(x²/2)</div>
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
<li><strong>Moment d'inertie :</strong> ∬ (x²+y²)ρ dxdy</li>
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

/* ==============================================================
   DONNÉES INFORMATIQUE
   ============================================================== */
const INFO_TOPICS = [
  {
    id:'cprog', cat:'info', icon:'C', color:'#6B8FE8',
    title:'Programmation C',
    subtitle:'Pointeurs · Fonctions · Récursivité · Allocation Dynamique',
    course:`
<h2>1. Programmation C</h2>
<h3>1.1 Pointeurs</h3>
<div class="def-box"><strong>Pointeur :</strong> Variable stockant l'adresse d'une autre variable.<br><code>int x=5; int *p=&x;</code> — <code>&x</code> : adresse | <code>*p</code> : déréférencement</div>
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
<pre><span class="kw">void</span> <span class="fn">parValeur</span>(<span class="kw">int</span> x) { x=<span class="num">100</span>; }  <span class="cm">// ne modifie pas l'original</span>
<span class="kw">void</span> <span class="fn">parAdresse</span>(<span class="kw">int</span> *x) { *x=<span class="num">100</span>; } <span class="cm">// modifie l'original</span></pre>
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
<p><strong>Applications :</strong> évaluation d'expressions, appels de fonctions, DFS.</p>
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
<tr><td>Inordre</td><td>G,Racine,D</td><td>Tri d'un ABR</td></tr>
<tr><td>Postordre</td><td>G,D,Racine</td><td>Suppression</td></tr>
<tr><td>BFS (largeur)</td><td>Niveau par niveau</td><td>Chemin court</td></tr>
</table>
<div class="theorem-box"><strong>ABR :</strong> Nœud gauche &lt; Racine &lt; Nœud droit. Recherche/insertion O(h) = O(log n) si équilibré.</div>
<h3>2.5 Graphes G=(V,E)</h3>
<ul>
<li><strong>Matrice d'adjacence :</strong> O(n²) espace</li>
<li><strong>Liste d'adjacence :</strong> O(n+m) espace</li>
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
       solution:`<p>• <strong>DNS :</strong> traduit un nom de domaine en adresse IP (ex: google.com → 142.250.x.x)<br>• <strong>DHCP :</strong> attribue automatiquement des adresses IP aux hôtes d'un réseau</p>`},
      {id:6,level:'difficile',title:'Routage OSPF',
       question:'<p>Comment OSPF calcule-t-il les routes optimales ?</p>',
       solution:`<p>Chaque routeur construit une carte complète du réseau (LSDB - Link State Database). Il applique l'algorithme de Dijkstra sur ce graphe pondéré (coût = bande passante) pour calculer l'arbre couvrant minimal depuis lui-même. Les routes sont installées dans la table de routage.</p>`}
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
<code>cat f1 | sort | uniq | wc -l | sed 's/A/B/g' | awk '{print $1}'</code>
</div>
<h3>6.2 Processus</h3>
<div class="def-box"><strong>Processus :</strong> Programme en cours d'exécution avec ses ressources (PID, espace mémoire, fichiers ouverts).<br>
États : Prêt → En cours → Bloqué → Terminé</div>
<div class="formula-box">
<code>fork() : crée un processus fils | exec() : remplace l'image | wait() : attend le fils</code>
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
<li><strong>Mémoire virtuelle :</strong> Illusion d'un grand espace mémoire via le swap.</li>
<li><strong>Remplacement de pages :</strong> FIFO, LRU (Least Recently Used), Optimal.</li>
</ul>
<h3>6.5 Synchronisation</h3>
<div class="formula-box">
<code>Mutex : exclusion mutuelle | Sémaphore : compteur + file d'attente</code><br>
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
<h3>7.1 Organisation d'un ordinateur</h3>
<div class="def-box"><strong>Composants :</strong> CPU (processeur), RAM (mémoire vive), ROM, bus de données, bus d'adresses, bus de contrôle, périphériques E/S.</div>
<h3>7.2 Le processeur (CPU)</h3>
<ul>
<li><strong>ALU :</strong> Unité Arithmétique et Logique (calculs)</li>
<li><strong>UC :</strong> Unité de Contrôle (décodage, séquencement)</li>
<li><strong>Registres :</strong> PC, SP, IR, ACC, flags</li>
<li><strong>Cache :</strong> L1 (très rapide), L2, L3</li>
</ul>
<h4>Cycle d'instruction (fetch-decode-execute)</h4>
<ol>
<li>Fetch : lecture de l'instruction depuis la mémoire</li>
<li>Decode : décodage de l'instruction</li>
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
<h3>8.2 Diagramme de cas d'utilisation</h3>
<p>Acteurs (externes) + cas d'utilisation (ellipses) dans un système.<br>
Relations : <code>include</code> (obligatoire), <code>extend</code> (optionnel).</p>
<h3>8.3 Diagramme de séquence</h3>
<p>Représente l'interaction entre objets dans le temps.<br>
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

const ALL_TOPICS = [...MATH_TOPICS, ...INFO_TOPICS];

/* ==============================================================
   ÉTAT GLOBAL
   ============================================================== */
let currentTopic = null;
let quizState = { questions:[], current:0, score:0, answered:false, topicId:'' };
let examState  = { questions:[], current:0, score:0, timer:null, seconds:0, answered:false };

/* ==============================================================
   NAVIGATION
   ============================================================== */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + pageId);
  if(pg) { pg.classList.add('active'); window.scrollTo(0,0); }

  document.querySelectorAll('.nav-item').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('[data-page="' + pageId + '"]').forEach(a => a.classList.add('active'));

  if(pageId === 'home') renderHome();
  if(pageId === 'math') renderTopicGrid('math');
  if(pageId === 'info') renderTopicGrid('info');
  if(pageId === 'exam') renderExamConfig();
  document.getElementById('sidebar').classList.remove('open');
}

function showTopicPage(topicId, cat) {
  const topic = ALL_TOPICS.find(t => t.id === topicId);
  if(!topic) return;
  currentTopic = topic;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-topic').classList.add('active');

  const catLabel = cat === 'math' ? 'Mathématiques' : 'Informatique';
  const catPage  = cat === 'math' ? 'math' : 'info';

  document.getElementById('topic-bc').innerHTML =
    `<a href="#" onclick="showPage('home')">Accueil</a> › 
     <a href="#" onclick="showPage('${catPage}')">${catLabel}</a> › ${topic.title}`;
  document.getElementById('topic-title').textContent = topic.title;
  document.getElementById('topic-sub').textContent   = topic.subtitle;

  switchTab('course');
  document.getElementById('course-body').innerHTML = topic.course;
  renderExercises(topic);
  renderQuizIntro(topic);

  document.querySelectorAll('.nav-sub').forEach(a => a.classList.remove('active'));
  const navLink = document.querySelector(`.nav-sub[data-id="${topicId}"]`);
  if(navLink) navLink.classList.add('active');
  window.scrollTo(0,0);
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
}

function toggleGroup(g) {
  const body  = document.getElementById('body-' + g);
  const arrow = document.getElementById('arrow-' + g);
  body.classList.toggle('open');
  arrow.classList.toggle('open');
}

/* ==============================================================
   HOME
   ============================================================== */
function renderHome() {
  const scores = getScores();
  const done   = Object.keys(scores).length;
  const el = document.getElementById('stat-done');
  if(el) el.textContent = done;

  const list = document.getElementById('scores-list');
  if(!list) return;
  if(done === 0) {
    list.innerHTML = '<p class="muted">Aucun quiz effectué. Commencez à réviser !</p>';
  } else {
    const entries = Object.entries(scores).slice(-8).reverse();
    list.innerHTML = entries.map(([k,v]) => {
      const pct  = Math.round((v.score/v.total)*100);
      const cls  = pct >= 80 ? 'great' : pct >= 50 ? 'ok' : 'poor';
      const t    = ALL_TOPICS.find(t => t.id === k);
      const name = t ? t.title : k;
      return `<div class="score-item">
        <span class="score-topic">${name}</span>
        <span class="score-val ${cls}">${v.score}/${v.total} (${pct}%)</span>
      </div>`;
    }).join('');
  }
  updateGlobalProgress();
}

function updateGlobalProgress() {
  const scores = getScores();
  const done   = Object.keys(scores).length;
  const total  = ALL_TOPICS.length;
  const pct    = total > 0 ? Math.round((done / total) * 100) : 0;
  const bar    = document.getElementById('global-bar');
  const pctEl  = document.getElementById('global-pct');
  if(bar) bar.style.width = pct + '%';
  if(pctEl) pctEl.textContent = pct + ' %';
}

/* ==============================================================
   TOPICS GRID
   ============================================================== */
function renderTopicGrid(cat) {
  const topics = cat === 'math' ? MATH_TOPICS : INFO_TOPICS;
  const grid   = document.getElementById(cat + '-grid');
  if(!grid) return;
  const scores = getScores();
  grid.innerHTML = topics.map(t => {
    const s    = scores[t.id];
    const badge = s ? `<span class="tc-badge">✓ ${Math.round(s.score/s.total*100)}%</span>` : '';
    return `<div class="topic-card" onclick="showTopicPage('${t.id}','${cat}')">
      <div class="tc-icon" style="background:${t.color}22;color:${t.color}">${t.icon}</div>
      <div class="tc-title">${t.title}</div>
      <div class="tc-sub">${t.subtitle}</div>
      <div class="tc-meta">
        <span class="tc-badge">${t.exercises?.length || 0} exercices</span>
        <span class="tc-badge">${t.quiz?.length || 0} QCM</span>
        ${badge}
      </div>
    </div>`;
  }).join('');
}

/* ==============================================================
   EXERCICES
   ============================================================== */
function renderExercises(topic) {
  const body = document.getElementById('exercises-body');
  if(!body) return;
  if(!topic.exercises || topic.exercises.length === 0) {
    body.innerHTML = '<p class="muted">Exercices à venir pour ce chapitre.</p>';
    return;
  }
  let filter = 'tous';
  function render(f) {
    const exos = f === 'tous' ? topic.exercises : topic.exercises.filter(e => e.level === f);
    body.innerHTML = `
      <div class="exercises-header">
        <h2>Exercices – ${topic.title}</h2>
        <div class="level-filters">
          ${['tous','facile','moyen','difficile'].map(l =>
            `<button class="level-btn ${filter===l?'active':''}" onclick="filterEx('${l}','${topic.id}')">${l.charAt(0).toUpperCase()+l.slice(1)}</button>`
          ).join('')}
        </div>
      </div>
      ${exos.map(ex => `
        <div class="exercise-card" id="excard-${ex.id}">
          <div class="ex-header" onclick="toggleEx(${ex.id})">
            <div class="ex-num">${ex.id}</div>
            <div class="ex-title">${ex.title}</div>
            <span class="ex-level level-${ex.level}">${ex.level}</span>
            <span class="ex-toggle" id="extoggle-${ex.id}">+</span>
          </div>
          <div class="ex-body" id="exbody-${ex.id}">
            <div class="ex-question">${ex.question}</div>
            <button class="show-sol-btn" onclick="showSol(${ex.id})">Voir la correction</button>
            <div class="ex-solution" id="exsol-${ex.id}">
              <h4>✅ Correction</h4>
              ${ex.solution}
            </div>
          </div>
        </div>
      `).join('')}
    `;
  }
  window.filterEx = (f, id) => {
    filter = f;
    const t = ALL_TOPICS.find(t => t.id === id);
    if(t) renderExercises(t);
    setTimeout(() => {
      document.querySelectorAll('.level-btn').forEach(b => {
        b.classList.toggle('active', b.textContent.toLowerCase() === f || (f==='tous' && b.textContent==='Tous'));
      });
    }, 10);
  };
  render(filter);
}

window.toggleEx = (id) => {
  const body = document.getElementById('exbody-' + id);
  const tog  = document.getElementById('extoggle-' + id);
  if(!body) return;
  body.classList.toggle('open');
  tog.classList.toggle('open');
};

window.showSol = (id) => {
  const sol = document.getElementById('exsol-' + id);
  if(sol) sol.classList.add('open');
};

/* ==============================================================
   QUIZ
   ============================================================== */
function renderQuizIntro(topic) {
  const body = document.getElementById('quiz-body');
  if(!body) return;
  if(!topic.quiz || topic.quiz.length === 0) {
    body.innerHTML = '<p class="muted">Quiz à venir pour ce chapitre.</p>';
    return;
  }
  body.innerHTML = `
    <div class="quiz-intro">
      <h2>🎯 Quiz – ${topic.title}</h2>
      <p>${topic.quiz.length} questions QCM · Correction instantanée · Résultat enregistré</p>
      <button class="start-quiz-btn" onclick="startQuiz('${topic.id}')">Commencer le Quiz</button>
    </div>`;
}

window.startQuiz = (topicId) => {
  const topic = ALL_TOPICS.find(t => t.id === topicId);
  if(!topic || !topic.quiz) return;
  quizState = {
    questions: [...topic.quiz].sort(() => Math.random() - 0.5),
    current: 0, score: 0, answered: false, topicId
  };
  renderQuizQuestion();
};

function renderQuizQuestion() {
  const body = document.getElementById('quiz-body');
  if(!body) return;
  const {questions, current} = quizState;
  if(current >= questions.length) { renderQuizResult(); return; }
  const q    = questions[current];
  const pct  = Math.round((current / questions.length) * 100);
  const lets = ['A','B','C','D'];

  body.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress">
        <div class="q-progress-bar"><div class="q-progress-fill" style="width:${pct}%"></div></div>
        <div class="q-num">Question ${current+1}/${questions.length}</div>
      </div>
      <div class="quiz-card">
        <div class="q-text">${q.q}</div>
        <div class="q-options">
          ${q.opts.map((o,i) => `
            <div class="q-option" id="qopt-${i}" onclick="selectOption(${i})">
              <div class="q-option-letter">${lets[i]}</div>
              <div>${o}</div>
            </div>`).join('')}
        </div>
        <div class="q-feedback" id="q-feedback"></div>
        <div class="q-actions">
          <button class="q-btn q-btn-primary hidden" id="q-next" onclick="nextQuestion()">
            ${current+1 < questions.length ? 'Question Suivante →' : 'Voir les Résultats 🏆'}
          </button>
        </div>
      </div>
    </div>`;
}

window.selectOption = (idx) => {
  if(quizState.answered) return;
  quizState.answered = true;
  const q   = quizState.questions[quizState.current];
  const fb  = document.getElementById('q-feedback');
  const nxt = document.getElementById('q-next');

  document.querySelectorAll('.q-option').forEach(o => o.classList.add('disabled'));

  const correct = idx === q.ans;
  if(correct) quizState.score++;

  document.querySelectorAll('.q-option').forEach((o,i) => {
    if(i === q.ans) o.classList.add('correct');
    else if(i === idx && !correct) o.classList.add('wrong');
  });

  if(fb) {
    fb.className = `q-feedback show ${correct ? 'correct' : 'wrong'}`;
    fb.innerHTML = correct
      ? `✅ <strong>Correct !</strong> ${q.exp}`
      : `❌ <strong>Incorrect.</strong> La bonne réponse est <strong>${q.opts[q.ans]}</strong>. ${q.exp}`;
  }
  if(nxt) nxt.classList.remove('hidden');
};

window.nextQuestion = () => {
  quizState.current++;
  quizState.answered = false;
  renderQuizQuestion();
};

function renderQuizResult() {
  const body  = document.getElementById('quiz-body');
  const {score, questions, topicId} = quizState;
  const total = questions.length;
  const pct   = Math.round((score/total)*100);
  const pctDeg = `${pct * 3.6}deg`;

  saveScore(topicId, score, total);

  const msg = pct >= 80 ? '🎉 Excellent !' : pct >= 60 ? '👍 Bien joué !' : '📚 Continuez à réviser !';

  body.innerHTML = `
    <div class="quiz-result">
      <div class="result-score-circle" style="--pct: ${pctDeg}">
        <span class="result-score-text">${pct}%</span>
      </div>
      <div class="result-label">${msg}</div>
      <p class="result-sub">${score} bonne(s) réponse(s) sur ${total}</p>
      <div class="result-actions">
        <button class="q-btn q-btn-secondary" onclick="startQuiz('${topicId}')">🔄 Recommencer</button>
        <button class="q-btn q-btn-primary" onclick="switchTab('course')">📖 Revoir le cours</button>
      </div>
    </div>`;
  updateGlobalProgress();
}

/* ==============================================================
   EXAMEN BLANC
   ============================================================== */
function renderExamConfig() {
  const body = document.getElementById('exam-body');
  if(!body) return;
  body.innerHTML = `
    <div class="exam-config">
      <h2>⚙️ Configuration de l'Examen</h2>
      <div class="config-row">
        <div class="config-item">
          <label>Nombre de questions</label>
          <select id="exam-q-count">
            <option value="10">10 questions</option>
            <option value="20" selected>20 questions</option>
            <option value="30">30 questions</option>
            <option value="40">40 questions</option>
          </select>
        </div>
        <div class="config-item">
          <label>Durée (minutes)</label>
          <select id="exam-duration">
            <option value="15">15 min</option>
            <option value="30" selected>30 min</option>
            <option value="60">60 min</option>
            <option value="90">90 min</option>
          </select>
        </div>
        <div class="config-item">
          <label>Matière</label>
          <select id="exam-cat">
            <option value="all">Toutes</option>
            <option value="math">Mathématiques</option>
            <option value="info">Informatique</option>
          </select>
        </div>
        <div class="config-item">
          <label>Difficulté</label>
          <select id="exam-diff">
            <option value="all">Toutes</option>
            <option value="facile">Facile</option>
            <option value="moyen">Moyen</option>
            <option value="difficile">Difficile</option>
          </select>
        </div>
      </div>
      <button class="start-exam-btn" onclick="startExam()">🚀 Démarrer l'Examen Blanc</button>
    </div>`;
}

window.startExam = () => {
  const n    = parseInt(document.getElementById('exam-q-count').value);
  const dur  = parseInt(document.getElementById('exam-duration').value);
  const cat  = document.getElementById('exam-cat').value;
  const diff = document.getElementById('exam-diff').value;

  let pool = [];
  const topics = cat === 'all' ? ALL_TOPICS :
                 cat === 'math' ? MATH_TOPICS : INFO_TOPICS;

  topics.forEach(t => {
    if(t.quiz) t.quiz.forEach(q => {
      pool.push({...q, topicTitle: t.title, cat: t.cat});
    });
    if(t.exercises) t.exercises.forEach(ex => {
      if(diff === 'all' || ex.level === diff) {
        pool.push({
          q: ex.title + ' : ' + ex.question.replace(/<[^>]*>/g,'').substring(0,120) + '...',
          opts: ['Voir la solution','Passer','Ignorer','Revoir le cours'],
          ans: 0, exp: ex.solution.replace(/<[^>]*>/g,'').substring(0,200),
          topicTitle: t.title, cat: t.cat, isEx: true
        });
      }
    });
  });

  // Mélanger et prendre n questions
  pool = pool.sort(() => Math.random() - 0.5).slice(0, n);

  examState = {
    questions: pool, current: 0, score: 0,
    seconds: dur * 60, answered: false,
    timer: null
  };

  renderExamQuestion();
  startExamTimer();
};

function startExamTimer() {
  if(examState.timer) clearInterval(examState.timer);
  examState.timer = setInterval(() => {
    examState.seconds--;
    updateTimerDisplay();
    if(examState.seconds <= 0) {
      clearInterval(examState.timer);
      renderExamResult(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const td = document.getElementById('exam-timer');
  if(!td) return;
  const m = Math.floor(examState.seconds / 60);
  const s = examState.seconds % 60;
  td.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  td.className = 'timer-display' +
    (examState.seconds <= 60 ? ' danger' : examState.seconds <= 300 ? ' warning' : '');
}

function renderExamQuestion() {
  const body = document.getElementById('exam-body');
  if(!body) return;
  const {questions, current} = examState;
  if(current >= questions.length) { renderExamResult(false); return; }
  const q    = questions[current];
  const pct  = Math.round(current / questions.length * 100);
  const m    = Math.floor(examState.seconds / 60);
  const s    = examState.seconds % 60;
  const lets = ['A','B','C','D'];

  body.innerHTML = `
    <div class="exam-timer-bar">
      <span>⏱ Temps restant</span>
      <span class="timer-display" id="exam-timer">${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}</span>
      <span>Q.${current+1}/${questions.length} · Score: ${examState.score}</span>
    </div>
    <div class="quiz-container">
      <div class="quiz-progress">
        <div class="q-progress-bar"><div class="q-progress-fill" style="width:${pct}%"></div></div>
        <div class="q-num">${q.topicTitle}</div>
      </div>
      <div class="quiz-card">
        <div class="q-text">${q.q}</div>
        <div class="q-options">
          ${q.opts.map((o,i) => `
            <div class="q-option" id="eopt-${i}" onclick="examSelectOption(${i})">
              <div class="q-option-letter">${lets[i]}</div>
              <div>${o}</div>
            </div>`).join('')}
        </div>
        <div class="q-feedback" id="e-feedback"></div>
        <div class="q-actions">
          <button class="q-btn q-btn-secondary" onclick="examNext()">Passer →</button>
          <button class="q-btn q-btn-primary hidden" id="e-next" onclick="examNext()">
            ${current+1 < questions.length ? 'Question Suivante →' : 'Terminer l\'Examen 🏁'}
          </button>
        </div>
      </div>
    </div>`;
}

window.examSelectOption = (idx) => {
  if(examState.answered) return;
  examState.answered = true;
  const q  = examState.questions[examState.current];
  const fb = document.getElementById('e-feedback');
  const nxt = document.getElementById('e-next');
  document.querySelectorAll('.q-option').forEach(o => o.classList.add('disabled'));
  const correct = idx === q.ans;
  if(correct) examState.score++;
  document.querySelectorAll('.q-option').forEach((o,i) => {
    if(i === q.ans) o.classList.add('correct');
    else if(i === idx && !correct) o.classList.add('wrong');
  });
  if(fb) {
    fb.className = `q-feedback show ${correct ? 'correct' : 'wrong'}`;
    fb.innerHTML = correct ? `✅ Correct ! ${q.exp}` : `❌ Bonne réponse : <strong>${q.opts[q.ans]}</strong>. ${q.exp}`;
  }
  if(nxt) nxt.classList.remove('hidden');
};

window.examNext = () => {
  examState.current++;
  examState.answered = false;
  if(examState.current >= examState.questions.length) {
    clearInterval(examState.timer);
    renderExamResult(false);
  } else {
    renderExamQuestion();
    updateTimerDisplay();
  }
};

function renderExamResult(timeout) {
  if(examState.timer) clearInterval(examState.timer);
  const body  = document.getElementById('exam-body');
  const {score, questions} = examState;
  const total  = questions.length;
  const pct    = Math.round((score/total)*100);
  const pctDeg = `${pct * 3.6}deg`;
  const msg    = timeout ? '⏰ Temps écoulé !' :
                 pct >= 80 ? '🎉 Excellente performance !' :
                 pct >= 60 ? '✅ Résultat correct.' : '📚 Il faut encore réviser.';

  saveScore('exam_' + Date.now(), score, total);

  body.innerHTML = `
    <div class="quiz-result">
      <div class="result-score-circle" style="--pct:${pctDeg}">
        <span class="result-score-text">${pct}%</span>
      </div>
      <div class="result-label">${msg}</div>
      <p class="result-sub">${score}/${total} questions correctes</p>
      <div class="result-actions">
        <button class="q-btn q-btn-secondary" onclick="renderExamConfig()">⚙️ Nouvel Examen</button>
        <button class="q-btn q-btn-primary" onclick="showPage('home')">🏠 Tableau de Bord</button>
      </div>
    </div>`;
}

/* ==============================================================
   LOCALSTORAGE
   ============================================================== */
function getScores() {
  try { return JSON.parse(localStorage.getItem('enset_scores') || '{}'); }
  catch(e) { return {}; }
}

function saveScore(topicId, score, total) {
  try {
    const scores = getScores();
    scores[topicId] = {score, total, date: new Date().toISOString()};
    localStorage.setItem('enset_scores', JSON.stringify(scores));
  } catch(e) {}
}

/* ==============================================================
   INIT
   ============================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Navigation sidebar dynamique
  document.querySelectorAll('.nav-sub[data-page="topic"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      showTopicPage(a.dataset.id, a.dataset.cat);
    });
  });

  document.querySelectorAll('.nav-item[data-page]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      showPage(a.dataset.page);
    });
  });

  // Rendre la grille Math et Info
  renderTopicGrid('math');
  renderTopicGrid('info');
  renderHome();
  updateGlobalProgress();
});
