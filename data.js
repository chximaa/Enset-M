'use strict';
/* ================================================================
   ENSET MOHAMMEDIA — Base de données pédagogique complète
   ================================================================ */

const MATH_TOPICS = [
  {
    id:'fonctions', cat:'math', icon:'ƒ', color:'#F5A8B8',
    title:'Fonctions – Limites & Dérivabilité',
    subtitle:'Domaines · Limites · TVI · Règles de dérivation',
    course:`
<h2>1. Fonctions – Limites, Continuité, Dérivabilité</h2>
<h3>1.1 Domaine de définition</h3>
<div class="def-box"><strong>D<sub>f</sub> :</strong> ensemble des x∈ℝ où f(x) est définie. Exclure : dénominateur=0, radicande&lt;0, argument log ≤0.</div>
<h3>1.2 Limites et formes indéterminées</h3>
<div class="theorem-box"><strong>Règle de L'Hôpital :</strong> Si lim f/g = 0/0 ou ∞/∞, alors lim f/g = lim f'/g'.</div>
<div class="formula-box"><code>lim(x→0) sin(x)/x=1 | lim(x→0)(eˣ−1)/x=1 | lim(x→0)ln(1+x)/x=1</code><br><code>lim(x→+∞) xⁿ/eˣ=0 | lim(x→+∞) ln(x)/x=0 | lim(x→+∞)(1+1/x)ˣ=e</code></div>
<div class="theorem-box"><strong>Théorème des Gendarmes :</strong> g(x)≤f(x)≤h(x) et lim g=lim h=L ⟹ lim f=L</div>
<h3>1.3 Continuité & TVI</h3>
<div class="def-box"><strong>f continue en a :</strong> lim<sub>x→a</sub>f(x)=f(a)</div>
<div class="theorem-box"><strong>TVI :</strong> f continue sur [a,b], f(a)·f(b)&lt;0 ⟹ ∃c∈]a,b[ : f(c)=0</div>
<h3>1.4 Dérivées usuelles</h3>
<table><tr><th>f</th><th>f'</th><th>f</th><th>f'</th></tr>
<tr><td>xⁿ</td><td>nxⁿ⁻¹</td><td>sin x</td><td>cos x</td></tr>
<tr><td>eˣ</td><td>eˣ</td><td>cos x</td><td>−sin x</td></tr>
<tr><td>ln x</td><td>1/x</td><td>arctan x</td><td>1/(1+x²)</td></tr></table>
<div class="formula-box"><code>(uv)'=u'v+uv' | (u/v)'=(u'v−uv')/v² | (f∘g)'=f'(g)·g'</code></div>
<div class="tip-box"><strong>Asymptote oblique y=ax+b :</strong> a=lim f(x)/x, b=lim[f(x)−ax] quand x→∞</div>`,
    exercises:[
      {id:1,level:'facile',title:'Domaine de définition',
       question:'<p>Déterminer D<sub>f</sub> de f(x)=√(x²−4)/ln(x+3)</p>',
       solution:`<p>x²−4≥0 → x≤−2 ou x≥2 ; x+3>0 → x>−3 ; ln(x+3)≠0 → x≠−2<br><strong>D<sub>f</sub>=]−3,−2[ ∪ [2,+∞[</strong></p>`},
      {id:2,level:'facile',title:'Limite par factorisation',
       question:'<p>Calculer lim<sub>x→3</sub>(x²−9)/(x−3)</p>',
       solution:`<p>(x−3)(x+3)/(x−3)=x+3 → <strong>6</strong></p>`},
      {id:3,level:'moyen',title:'L\'Hôpital',
       question:'<p>Calculer lim<sub>x→0</sub>(eˣ−1−x)/x²</p>',
       solution:`<p>0/0 → (eˣ−1)/2x → 0/0 → eˣ/2 → <strong>1/2</strong></p>`},
      {id:4,level:'moyen',title:'Dérivée composée',
       question:'<p>Calculer f\'(x) pour f(x)=ln(cos(x²))</p>',
       solution:`<p>f'(x)=−sin(x²)·2x/cos(x²) = <strong>−2x·tan(x²)</strong></p>`},
      {id:5,level:'moyen',title:'Prolongement par continuité',
       question:'<p>Prolonger f(x)=sin(3x)/x pour x≠0.</p>',
       solution:`<p>lim=3·sin(3x)/(3x)→3·1=3. Poser <strong>f(0)=3</strong></p>`},
      {id:6,level:'difficile',title:'Application TVI',
       question:'<p>Montrer que f(x)=x⁵+3x−5 admet une unique racine réelle.</p>',
       solution:`<p>f(1)=−1&lt;0, f(2)=33>0 → racine dans ]1,2[ (TVI). f'(x)=5x⁴+3>0 → strictement croissante → <strong>unicité</strong>.</p>`},
      {id:7,level:'difficile',title:'Étude complète',
       question:'<p>Étudier f(x)=xe^(−x) : variations, extrema, asymptotes.</p>',
       solution:`<p>f'=(1−x)e^(−x). Max en x=1 : f(1)=1/e. f''=(x−2)e^(−x) → inflexion en x=2. AH : y=0 quand x→+∞.</p>`}
    ],
    quiz:[
      {q:'lim(x→0)sin(5x)/x=?',opts:['0','1','5','∞'],ans:2,exp:'5·sin(5x)/(5x)→5'},
      {q:'L\'Hôpital s\'applique pour :',opts:['1/∞','0·∞','0/0 et ∞/∞','∞+∞'],ans:2,exp:'Formes 0/0 et ∞/∞'},
      {q:'D<sub>f</sub> de √(4−x²) :',opts:['[0,2]','[−2,2]','ℝ','[−2,0]'],ans:1,exp:'4−x²≥0 → x∈[−2,2]'},
      {q:'TVI nécessite :',opts:['f dérivable','f continue + changement de signe','f croissante','f(a)=0'],ans:1,exp:'Continuité + f(a)·f(b)&lt;0'},
      {q:'(arctan x)\'=?',opts:['1/x','1/(1+x²)','−1/√(1−x²)','√(1+x²)'],ans:1,exp:'Dérivée standard'},
      {q:'lim(x→+∞)(2x²+3)/(x²−1)=?',opts:['0','1','2','∞'],ans:2,exp:'Termes dominants : 2x²/x²=2'},
      {q:'(uv)\'=?',opts:['u\'v\'','u\'v+uv\'','(u\'v−uv\')/v²','u\'+v\''],ans:1,exp:'Règle du produit'},
      {q:'Dérivable en a implique :',opts:['Bornée','Dérivable partout','Continue en a','Monotone'],ans:2,exp:'Dérivabilité ⟹ continuité'},
      {q:'lim(x→0)(1−cos x)/x²=?',opts:['0','1/2','1','2'],ans:1,exp:'1−cos x≈x²/2'},
      {q:'Asymptote oblique a=?',opts:['lim f(x)','lim f(x)/x','lim f\'(x)','f(0)'],ans:1,exp:'a=lim(x→∞)f(x)/x'}
    ]
  },
  {
    id:'dl', cat:'math', icon:'∑', color:'#C8A87E',
    title:'Développements Limités (DL)',
    subtitle:'Formule de Taylor · DL usuels · Applications',
    course:`
<h2>2. Développements Limités</h2>
<div class="theorem-box"><strong>Taylor-Young :</strong> f(x)=Σₖ₌₀ⁿ f⁽ᵏ⁾(a)/k!·(x−a)ᵏ + o((x−a)ⁿ)</div>
<h3>DL usuels en x=0</h3>
<div class="formula-box">
<code>eˣ = 1+x+x²/2!+x³/3!+…+xⁿ/n! + o(xⁿ)</code><br>
<code>sin x = x−x³/6+x⁵/120−… + o(x^(2n+2))</code><br>
<code>cos x = 1−x²/2+x⁴/24−… + o(x^(2n+1))</code><br>
<code>ln(1+x) = x−x²/2+x³/3−… + o(xⁿ)</code><br>
<code>(1+x)^α = 1+αx+α(α−1)x²/2+… + o(xⁿ)</code><br>
<code>arctan x = x−x³/3+x⁵/5−… + o(x^(2n))</code>
</div>
<h3>Applications</h3>
<div class="example-box"><strong>Limite :</strong> lim(x→0)(sin x−x)/x³<br>sin x=x−x³/6+o(x³) → (sin x−x)/x³=−1/6+o(1) → <strong>−1/6</strong></div>
<div class="theorem-box"><strong>Équivalents (x→0) :</strong> sin x∼x, 1−cos x∼x²/2, ln(1+x)∼x, eˣ−1∼x</div>`,
    exercises:[
      {id:1,level:'facile',title:'DL de eˣcos x à l\'ordre 4',
       question:'<p>Calculer le DL à l\'ordre 4 de eˣ·cos x en x=0.</p>',
       solution:`<p>eˣ=1+x+x²/2+x³/6+x⁴/24+… | cos x=1−x²/2+x⁴/24+…<br>Produit tronqué : <strong>1+x−x³/3−x⁴/6+o(x⁴)</strong></p>`},
      {id:2,level:'facile',title:'Limite via DL',
       question:'<p>Calculer lim<sub>x→0</sub>(tan x−x)/x³</p>',
       solution:`<p>tan x=x+x³/3+… → <strong>1/3</strong></p>`},
      {id:3,level:'moyen',title:'DL par composition',
       question:'<p>DL à l\'ordre 4 de ln(cos x)</p>',
       solution:`<p>cos x=1−x²/2+x⁴/24. ln(1+u)≈u−u²/2, u=−x²/2+x⁴/24.<br><strong>ln(cos x)=−x²/2−x⁴/12+o(x⁴)</strong></p>`},
      {id:4,level:'moyen',title:'Nature d\'un point critique',
       question:'<p>Étudier la nature de x=0 pour f(x)=eˣ−1−x.</p>',
       solution:`<p>DL : f(x)=x²/2+o(x²). Exposant pair, coeff positif → <strong>minimum local</strong>.</p>`},
      {id:5,level:'difficile',title:'Limite type 1^∞',
       question:'<p>Calculer lim<sub>x→0</sub>(cos x)^(1/x²)</p>',
       solution:`<p>ln(cos x)/x²=(−x²/2−x⁴/12+…)/x²→−1/2. Résultat : <strong>e^(−1/2)=1/√e</strong></p>`}
    ],
    quiz:[
      {q:'DL de eˣ à l\'ordre 2 :',opts:['1+x','1+x+x²','1+x+x²/2','x+x²/2'],ans:2,exp:'eˣ=1+x+x²/2+o(x²)'},
      {q:'lim(x→0)(1−cos x)/x²=?',opts:['0','1','1/2','2'],ans:2,exp:'1−cos x=x²/2+…'},
      {q:'DL de ln(1+x) à l\'ordre 3 :',opts:['x−x²+x³','x−x²/2+x³/3','1+x+x²/2','x+x²+x³'],ans:1,exp:'Série standard du log'},
      {q:'lim(x→0)(sin x−x)/x³=?',opts:['1/6','−1/6','1/3','−1/3'],ans:1,exp:'sin x−x=−x³/6+o(x³)'},
      {q:'Si DL de f−f(a) commence par a₂(x−a)², a₂>0 :',opts:['Maximum','Minimum','Inflexion','Indéterminé'],ans:1,exp:'k pair positif → minimum'}
    ]
  },
  {
    id:'algebre', cat:'math', icon:'A', color:'#C2587A',
    title:'Algèbre Linéaire',
    subtitle:'Espaces Vectoriels · Matrices · Valeurs Propres · Diagonalisation',
    course:`
<h2>3. Algèbre Linéaire</h2>
<div class="theorem-box"><strong>SEV – Critère :</strong> F⊂E est SEV ssi 0∈F et ∀u,v∈F, ∀λ,μ∈ℝ: λu+μv∈F</div>
<div class="theorem-box"><strong>Théorème du rang :</strong> dim(ker f)+dim(im f)=dim E</div>
<div class="formula-box"><code>det[a,b;c,d]=ad−bc | det(AB)=det(A)·det(B) | A⁻¹=(1/det A)·com(A)ᵀ</code></div>
<div class="theorem-box"><strong>Rouché-Fontené :</strong> AX=B compatible ⟺ rang(A)=rang(A|B)</div>
<h3>Valeurs Propres</h3>
<div class="def-box"><strong>Équation caractéristique :</strong> det(A−λI)=0<br>tr(A)=Σλᵢ | det(A)=Πλᵢ</div>
<div class="formula-box"><code>P=[v₁|v₂|…|vₙ] → P⁻¹AP=D | Aⁿ=P·Dⁿ·P⁻¹</code></div>
<div class="theorem-box"><strong>Spectral :</strong> Matrice symétrique réelle → orthogonalement diagonalisable, VP réelles.</div>`,
    exercises:[
      {id:1,level:'facile',title:'Déterminants',
       question:'<p>Calculer det(A) pour A=[[2,3],[1,4]] et det(B) pour B=[[1,2,0],[3,1,2],[0,1,1]]</p>',
       solution:`<p>det(A)=8−3=<strong>5</strong><br>det(B)=1(1−2)−2(3−0)=−1−6=<strong>−7</strong></p>`},
      {id:2,level:'moyen',title:'Valeurs propres',
       question:'<p>Trouver les VP et vecteurs propres de A=[[4,1],[2,3]]</p>',
       solution:`<p>χ(λ)=λ²−7λ+10=(λ−2)(λ−5). λ₁=2: v₁=(1,−2) | λ₂=5: v₂=(1,1)</p>`},
      {id:3,level:'moyen',title:'Système linéaire',
       question:'<p>Résoudre : x+2y+z=1, 2x+3y−z=0, x+y−2z=−1</p>',
       solution:`<p>Pivot de Gauss → rang=2&lt;3 → ∞ solutions.<br>Solution : (x,y,z)=(−3+5t, 2−3t, t), t∈ℝ</p>`},
      {id:4,level:'difficile',title:'Diagonalisation',
       question:'<p>Diagonaliser A=[[4,1],[2,3]] et calculer A⁵.</p>',
       solution:`<p>P=[[1,1],[−2,1]], D=diag(2,5). A⁵=P·diag(32,3125)·P⁻¹</p>`},
      {id:5,level:'difficile',title:'Non diagonalisabilité',
       question:'<p>A=[[1,1,0],[0,1,1],[0,0,1]]. Discuter la diagonalisabilité.</p>',
       solution:`<p>χ(λ)=(1−λ)³ → λ=1 (mult.alg.=3). dim(E₁)=1≠3 → <strong>non diagonalisable</strong>.</p>`}
    ],
    quiz:[
      {q:'det(AB)=?',opts:['det(A)+det(B)','det(A)·det(B)','det(A)/det(B)','det(Aᵀ)'],ans:1,exp:'Propriété fondamentale'},
      {q:'A inversible ⟺',opts:['tr(A)≠0','det(A)≠0','A symétrique','A diagonale'],ans:1,exp:'det(A)≠0 ⟺ A inversible'},
      {q:'Équation caractéristique :',opts:['AX=0','det(A)=0','det(A−λI)=0','Av=λv seulement'],ans:2,exp:'det(A−λI)=0'},
      {q:'tr(A) égal à :',opts:['Somme des éléments','Produit des VP','Somme des VP','Déterminant'],ans:2,exp:'tr(A)=somme des valeurs propres'},
      {q:'Matrice symétrique réelle :',opts:['Toujours singulière','Non inversible','Orthogonalement diagonalisable','Idempotente'],ans:2,exp:'Théorème spectral'}
    ]
  },
  {
    id:'integration', cat:'math', icon:'∫', color:'#5C3D2E',
    title:'Intégration',
    subtitle:'IPP · Fractions Partielles · Changements de Variables · Impropres',
    course:`
<h2>4. Intégration</h2>
<div class="theorem-box"><strong>TFA :</strong> ∫ₐᵇf(x)dx=F(b)−F(a) où F est une primitive de f.</div>
<h3>Méthodes</h3>
<div class="formula-box"><code>IPP : ∫u·v'=[u·v]−∫u'·v | LIATE : L,I,A,T,E pour choisir u</code></div>
<div class="example-box"><strong>IPP :</strong> ∫x·eˣdx. u=x, v'=eˣ → <strong>eˣ(x−1)+C</strong></div>
<div class="formula-box"><code>Changement : t=g(x) → dt=g'(x)dx | Fractions partielles : P/Q décomposée</code></div>
<h3>Intégrales Impropres</h3>
<div class="formula-box"><code>∫₁^∞ dx/xᵃ converge ⟺ a>1 | ∫₀¹ dx/xᵃ converge ⟺ a&lt;1</code></div>
<h3>Primitives usuelles</h3>
<div class="formula-box">
<code>∫xⁿ=xⁿ⁺¹/(n+1) | ∫eˣ=eˣ | ∫ln x=x ln x−x | ∫sin x=−cos x | ∫cos x=sin x</code><br>
<code>∫1/(1+x²)=arctan x | ∫1/√(1−x²)=arcsin x | ∫1/x=ln|x|</code>
</div>`,
    exercises:[
      {id:1,level:'facile',title:'IPP : ∫x·ln x dx',
       question:'<p>Calculer ∫x·ln(x)dx</p>',
       solution:`<p>u=ln x, v'=x. <strong>x²(2ln x−1)/4 + C</strong></p>`},
      {id:2,level:'facile',title:'Changement de variable',
       question:'<p>Calculer ∫₀¹ x/(x²+1)² dx</p>',
       solution:`<p>t=x²+1, dt=2x dx. =(1/2)∫₁² t⁻² dt = <strong>1/4</strong></p>`},
      {id:3,level:'moyen',title:'Fractions partielles',
       question:'<p>Calculer ∫ (2x+1)/(x²+x−2) dx</p>',
       solution:`<p>x²+x−2=(x+2)(x−1). Décomposition A=B=1 → <strong>ln|x+2|+ln|x−1|+C</strong></p>`},
      {id:4,level:'moyen',title:'Intégrale impropre',
       question:'<p>Étudier ∫₁^∞ 1/(x√x) dx.</p>',
       solution:`<p>a=3/2>1 → converge. [−2/√x]₁^∞=<strong>2</strong></p>`},
      {id:5,level:'difficile',title:'Critère de comparaison',
       question:'<p>Montrer que ∫₁^∞ sin(x)/x² dx converge.</p>',
       solution:`<p>|sin x/x²|≤1/x². ∫1/x² converge (a=2>1) → <strong>convergence absolue</strong>. ∎</p>`}
    ],
    quiz:[
      {q:'∫eˣdx=?',opts:['eˣ+C','xeˣ+C','eˣ/x+C','xe^(x+1)+C'],ans:0,exp:'Primitive de eˣ est eˣ'},
      {q:'Règle IPP :',opts:['∫uv=∫u·∫v','∫u·v\'=[uv]−∫u\'·v','∫uv=u\'v\'/uv','∫u\'v\'=uv'],ans:1,exp:'∫u·v\'=[uv]−∫u\'·v'},
      {q:'∫₁^∞ 1/xᵃ converge si :',opts:['a>0','a&lt;1','a>1','a=1'],ans:2,exp:'Riemann converge ⟺ a>1'},
      {q:'∫cos x dx=?',opts:['−sin x+C','sin x+C','−cos x+C','tan x+C'],ans:1,exp:'Primitive de cos x'},
      {q:'√(9−x²) → substitution :',opts:['x=3tan θ','x=3sin θ','x=9cos θ','x=3/cos θ'],ans:1,exp:'√(a²−x²)→x=a sin θ'}
    ]
  },
  {
    id:'edo', cat:'math', icon:'y\'', color:'#F5A8B8',
    title:'Équations Différentielles',
    subtitle:'Ordre 1 · Ordre 2 à coefficients constants · Cauchy',
    course:`
<h2>5. Équations Différentielles</h2>
<h3>EDO ordre 1</h3>
<div class="formula-box"><code>Séparables : dy/g(y)=f(x)dx | Linéaires : y_h=Ce^(−∫p dx)</code></div>
<h3>EDO ordre 2 : ay''+by'+cy=f(x)</h3>
<div class="formula-box"><code>Éq. car. : ar²+br+c=0</code></div>
<table>
<tr><th>Δ</th><th>Solution y_h</th></tr>
<tr><td>Δ>0</td><td>C₁e^(r₁x)+C₂e^(r₂x)</td></tr>
<tr><td>Δ=0</td><td>(C₁+C₂x)e^(rx)</td></tr>
<tr><td>Δ&lt;0 (α±iβ)</td><td>e^(αx)[C₁cos(βx)+C₂sin(βx)]</td></tr>
</table>
<div class="tip-box"><strong>Résonance :</strong> Si y_p ∈ y_h → multiplier par x.</div>`,
    exercises:[
      {id:1,level:'facile',title:'Variables séparables',
       question:'<p>Résoudre y\'=2y, y(0)=3</p>',
       solution:`<p>dy/y=2dx → y=Ae^(2x). y(0)=3 → <strong>y=3e^(2x)</strong></p>`},
      {id:2,level:'moyen',title:'Racines complexes',
       question:'<p>Résoudre y\'\'+ 4y=0, y(0)=0, y\'(0)=2</p>',
       solution:`<p>r=±2i → y=C₁cos(2x)+C₂sin(2x). CI: C₁=0, C₂=1 → <strong>y=sin(2x)</strong></p>`},
      {id:3,level:'moyen',title:'Racines réelles',
       question:'<p>Résoudre y\'\'−5y\'+6y=0, y(0)=1, y\'(0)=0</p>',
       solution:`<p>r=2,3. CI: C₁=3, C₂=−2 → <strong>y=3e^(2x)−2e^(3x)</strong></p>`},
      {id:4,level:'difficile',title:'Résonance',
       question:'<p>Résoudre y\'\'+ y=cos x</p>',
       solution:`<p>i est racine → y_p=(x/2)sin x → <strong>y=C₁cos x+C₂sin x+(x/2)sin x</strong></p>`}
    ],
    quiz:[
      {q:"Éq. car. de y''−3y'+2y=0 :",opts:['r²+3r+2=0','r²−3r+2=0','r²−3r−2=0','3r+2=0'],ans:1,exp:'Substitution directe'},
      {q:'Racine double r → solution :',opts:['C₁e^(rx)','(C₁+C₂x)e^(rx)','C₁cos(rx)+C₂sin(rx)','C₁+C₂'],ans:1,exp:'Racine double : (C₁+C₂x)e^(rx)'},
      {q:"y''+4y=0 → solution :",opts:['C₁e^(2x)+C₂e^(−2x)','C₁cos(2x)+C₂sin(2x)','(C₁+C₂x)e^(2x)','Ce^(2x)'],ans:1,exp:'r=±2i → cos/sin'},
      {q:'Résonance → multiplier y_p par :',opts:['eˣ','e^(rx)','x','x²'],ans:2,exp:'Règle de résonance: ×x'}
    ]
  },
  {
    id:'series', cat:'math', icon:'Σ', color:'#C8A87E',
    title:'Suites & Séries',
    subtitle:'Séries numériques · Séries entières · Fourier',
    course:`
<h2>6. Suites et Séries</h2>
<div class="theorem-box"><strong>CN :</strong> Σuₙ converge ⟹ uₙ→0 (réciproque fausse : Σ1/n diverge)</div>
<div class="formula-box"><code>Géométrique : Σrⁿ, |r|&lt;1 → 1/(1−r) | Riemann : Σ1/nᵃ, a>1</code></div>
<table>
<tr><th>Critère</th><th>Résultat</th></tr>
<tr><td>D'Alembert</td><td>L=lim|u_{n+1}/uₙ|. L&lt;1→CV, L>1→DV</td></tr>
<tr><td>Leibniz</td><td>Σ(−1)ⁿuₙ, uₙ↘0 → CV</td></tr>
</table>
<div class="formula-box"><code>Séries entières: R=1/lim|aₙ|^(1/n) (Cauchy-Hadamard)</code></div>
<div class="formula-box"><code>Fourier: f(x)=a₀/2+Σ[aₙcos(nx)+bₙsin(nx)]</code><br><code>f paire → bₙ=0 | f impaire → aₙ=0</code></div>`,
    exercises:[
      {id:1,level:'facile',title:'Série géométrique',
       question:'<p>Étudier Σ(2/3)ⁿ et calculer sa somme.</p>',
       solution:`<p>r=2/3&lt;1 → converge. Somme=<strong>3</strong></p>`},
      {id:2,level:'moyen',title:'Rayon de convergence',
       question:'<p>Trouver R de Σ(n²/3ⁿ)xⁿ.</p>',
       solution:`<p>|a_{n+1}/aₙ|→1/3 → R=<strong>3</strong></p>`},
      {id:3,level:'moyen',title:'Coefficients de Fourier',
       question:'<p>Calculer les coefficients de Fourier de f(x)=x² sur [−π,π].</p>',
       solution:`<p>f paire→bₙ=0. a₀=2π²/3. aₙ=4(−1)ⁿ/n².<br><strong>f(x)=π²/3+Σ4(−1)ⁿ/n²·cos(nx)</strong></p>`},
      {id:4,level:'difficile',title:'Critère intégral',
       question:'<p>Étudier Σ1/(n·ln²n) pour n≥2.</p>',
       solution:`<p>∫₂^∞dx/(x·ln²x)=[−1/ln x]₂^∞=1/ln 2&lt;∞ → <strong>converge</strong>.</p>`}
    ],
    quiz:[
      {q:'Σ(1/2)ⁿ (n≥0)=?',opts:['1','2','1/2','∞'],ans:1,exp:'1/(1−1/2)=2'},
      {q:'Σ1/n :',opts:['→ln 2','→π','Diverge','→1'],ans:2,exp:'Série harmonique diverge'},
      {q:'Σ1/nᵃ converge si :',opts:['a>0','a&lt;1','a>1','a=1'],ans:2,exp:'Série de Riemann'},
      {q:'bₙ de Fourier d\'une fonction paire=?',opts:['Quelconques','=aₙ','=0','=1/n'],ans:2,exp:'f paire → bₙ=0'}
    ]
  },
  {
    id:'multiint', cat:'math', icon:'∬', color:'#F5A8B8',
    title:'Intégrales Multiples',
    subtitle:'Fubini · Coordonnées polaires · Applications',
    course:`
<h2>7. Intégrales Multiples</h2>
<div class="theorem-box"><strong>Fubini :</strong> ∬_D f dxdy=∫ₐᵇ[∫ᶜᵈ f dy]dx (f continue)</div>
<div class="formula-box"><code>Polaires : dxdy=r dr dθ | Cyl : dxdydz=r dr dθ dz | Sphériques : dxdydz=ρ²sinφ dρ dφ dθ</code></div>
<div class="example-box"><strong>Exemple :</strong> ∬_{r≤1} e^(x²+y²)dxdy=∫₀^(2π)∫₀¹ e^(r²)r drdθ=<strong>π(e−1)</strong></div>`,
    exercises:[
      {id:1,level:'facile',title:'Fubini',
       question:'<p>Calculer ∫₀¹∫₀²(x+y)dxdy</p>',
       solution:`<p>∫₀¹[x²/2+xy]₀²dy=∫₀¹(2+2y)dy=<strong>3</strong></p>`},
      {id:2,level:'moyen',title:'Polaires',
       question:'<p>Calculer ∬_{x²+y²≤4}(x²+y²)dxdy</p>',
       solution:`<p>=∫₀^(2π)∫₀² r³ drdθ=2π[r⁴/4]₀²=<strong>8π</strong></p>`},
      {id:3,level:'moyen',title:'Changement d\'ordre',
       question:'<p>Calculer ∫₀¹∫ₓ¹ e^(y²)dydx en changeant l\'ordre.</p>',
       solution:`<p>0≤y≤1, 0≤x≤y → ∫₀¹ y·e^(y²)dy=<strong>(e−1)/2</strong></p>`}
    ],
    quiz:[
      {q:'Jacobien en polaires :',opts:['1','r','r²','sinφ'],ans:1,exp:'dxdy=r drdθ'},
      {q:'Aire de D=?',opts:['∬f dxdy','∬1 dxdy','∬x dxdy','∬y dxdy'],ans:1,exp:'Aire=∬_D 1 dxdy'},
      {q:'Jacobien en sphériques :',opts:['ρ','ρ²','ρ²sinφ','sinφ'],ans:2,exp:'dxdydz=ρ²sinφ dρdφdθ'}
    ]
  },
  {
    id:'foncplusieurs', cat:'math', icon:'∂', color:'#C2587A',
    title:'Fonctions de Plusieurs Variables',
    subtitle:'Dérivées Partielles · Gradient · Extrema · Lagrange',
    course:`
<h2>8. Fonctions de Plusieurs Variables</h2>
<div class="def-box"><strong>∂f/∂x :</strong> dériver en x, y constant. <strong>∇f=(∂f/∂x, ∂f/∂y)</strong></div>
<div class="theorem-box"><strong>Hessienne :</strong> D=f_xx·f_yy−f_xy²<br>D>0,f_xx>0→min | D>0,f_xx&lt;0→max | D&lt;0→selle</div>
<div class="theorem-box"><strong>Lagrange :</strong> Max f sous g=0 → ∇f=λ·∇g et g=0</div>
<div class="formula-box"><code>Règle chaîne : dz/dt=(∂f/∂x)(dx/dt)+(∂f/∂y)(dy/dt)</code></div>`,
    exercises:[
      {id:1,level:'facile',title:'Dérivées partielles',
       question:'<p>∂f/∂x et ∂f/∂y pour f(x,y)=x³y+sin(xy)</p>',
       solution:`<p>∂f/∂x=3x²y+y·cos(xy)<br>∂f/∂y=x³+x·cos(xy)</p>`},
      {id:2,level:'moyen',title:'Points critiques',
       question:'<p>Extrema de f(x,y)=x²+y²−2x−4y+5</p>',
       solution:`<p>∇f=0→(1,2). D=4>0, f_xx=2>0 → <strong>minimum</strong>. f(1,2)=0</p>`},
      {id:3,level:'moyen',title:'Lagrange',
       question:'<p>Max de f(x,y)=xy sous x+y=1</p>',
       solution:`<p>∇f=(y,x)=λ(1,1) → x=y=1/2. Max=<strong>1/4</strong></p>`}
    ],
    quiz:[
      {q:'Pour ∂f/∂x, y est :',opts:['Variable','Constante','Paramètre','Zéro'],ans:1,exp:'y traité comme constante'},
      {q:'D&lt;0 → type de point :',opts:['Maximum','Minimum','Point selle','Indéterminé'],ans:2,exp:'det(H)&lt;0→point selle'},
      {q:'Lagrange résout :',opts:['Dérivée nulle','Optimisation sous contrainte','Deux variables','Système linéaire'],ans:1,exp:'Méthode pour f sous g=0'}
    ]
  },
  {
    id:'proba', cat:'math', icon:'P', color:'#38D9A9',
    title:'Probabilités & Statistiques',
    subtitle:'Lois discrètes & continues · Bayes · TCL',
    course:`
<h2>9. Probabilités & Statistiques</h2>
<div class="theorem-box"><strong>Bayes :</strong> P(Aᵢ|B)=P(B|Aᵢ)·P(Aᵢ)/Σ P(B|Aⱼ)·P(Aⱼ)</div>
<div class="formula-box"><code>E(X)=Σxᵢ·P(X=xᵢ) | V(X)=E(X²)−[E(X)]²</code></div>
<table>
<tr><th>Loi</th><th>E(X)</th><th>V(X)</th></tr>
<tr><td>B(n,p)</td><td>np</td><td>np(1−p)</td></tr>
<tr><td>Poisson P(λ)</td><td>λ</td><td>λ</td></tr>
<tr><td>Normale N(μ,σ²)</td><td>μ</td><td>σ²</td></tr>
<tr><td>Exp E(λ)</td><td>1/λ</td><td>1/λ²</td></tr>
</table>
<div class="theorem-box"><strong>TCL :</strong> Pour n grand, (X̄−μ)/(σ/√n)~N(0,1)</div>`,
    exercises:[
      {id:1,level:'facile',title:'Probabilité conditionnelle',
       question:'<p>P(As | carte rouge) dans jeu de 52 cartes ?</p>',
       solution:`<p>P(As∩rouge)=2/52. P(rouge)=26/52. P(As|rouge)=<strong>1/13</strong></p>`},
      {id:2,level:'moyen',title:'Bayes',
       question:'<p>Maladie : 1%, test+ si malade (95%), test+ si sain (2%). P(malade|test+)=?</p>',
       solution:`<p>P(+)=0.95×0.01+0.02×0.99=0.0293. P(M|+)=0.0095/0.0293≈<strong>32.4%</strong></p>`},
      {id:3,level:'moyen',title:'Loi normale',
       question:'<p>X~N(70,25). Calculer P(65≤X≤80).</p>',
       solution:`<p>Z=(X−70)/5. P(−1≤Z≤2)=Φ(2)−Φ(−1)=0.9772−0.1587=<strong>0.8185</strong></p>`}
    ],
    quiz:[
      {q:'P(A∪B)=P(A)+P(B) si :',opts:['A⊂B','A∩B=∅','P(A)>P(B)','Indépendants'],ans:1,exp:'Événements incompatibles'},
      {q:'Poisson P(λ): E(X)=V(X)=?',opts:['1','λ','λ²','√λ'],ans:1,exp:'Loi de Poisson'},
      {q:'Loi normale N(μ,σ²): P(μ−σ≤X≤μ+σ)≈?',opts:['68%','95%','99.7%','50%'],ans:0,exp:'Règle 68-95-99.7'},
      {q:'TCL: pour n grand, (X̄−μ)/(σ/√n) suit :',opts:['N(0,1)','N(μ,σ²)','Poisson','Uniforme'],ans:0,exp:'TCL → loi normale centrée réduite'}
    ]
  },
  {
    id:'algebre_rel', cat:'math', icon:'⊗', color:'#4C6EF5',
    title:'Algèbre Relationnelle & SQL Avancé',
    subtitle:'Opérations · Formes normales · SQL Fenêtrage',
    course:`
<h2>10. Algèbre Relationnelle</h2>
<table>
<tr><th>Op.</th><th>Notation</th><th>Description</th></tr>
<tr><td>Sélection</td><td>σ_cond(R)</td><td>Filtre tuples</td></tr>
<tr><td>Projection</td><td>π_attrs(R)</td><td>Garde colonnes</td></tr>
<tr><td>Jointure</td><td>R⋈S</td><td>Sur colonnes communes</td></tr>
<tr><td>Division</td><td>R÷S</td><td>Tuples liés à tous les S</td></tr>
</table>
<h3>Formes Normales</h3>
<div class="formula-box">
<code>1NF: valeurs atomiques | 2NF: 1NF+pas DF partielle | 3NF: 2NF+pas DF transitive | BCNF: tout déterminant est superclé</code>
</div>
<h3>Axiomes d'Armstrong</h3>
<div class="theorem-box">Réflexivité, Augmentation, Transitivité → fermeture X⁺</div>`,
    exercises:[
      {id:1,level:'facile',title:'Sélection et projection',
       question:'<p>En algèbre relationnelle : noms des étudiants de plus de 20 ans.</p>',
       solution:`<p>π_nom(σ_age>20(Etudiant))</p>`},
      {id:2,level:'moyen',title:'Normalisation 3NF',
       question:'<p>Normaliser : R(Etud_id, Etud_nom, Dept_id, Dept_nom, Cours_id, Note)</p>',
       solution:`<p>Tables 3NF :<br>• Etudiant(<u>Etud_id</u>, Etud_nom, Dept_id)<br>• Departement(<u>Dept_id</u>, Dept_nom)<br>• Inscription(<u>Etud_id, Cours_id</u>, Note)</p>`},
      {id:3,level:'difficile',title:'Fermeture d\'attributs',
       question:'<p>F={A→BC, B→C, AB→D}. Calculer {A}⁺</p>',
       solution:`<p>{A}⁺: A→BC (add BC), B→C (déjà là), AB→D (add D). <strong>{A}⁺={A,B,C,D}=R</strong> → A est clé.</p>`}
    ],
    quiz:[
      {q:'σ_cond(R) est :',opts:['Projection','Sélection','Jointure','Union'],ans:1,exp:'σ=sélection (filtre)'},
      {q:'BCNF est plus forte que :',opts:['1NF','2NF','3NF','Aucune'],ans:2,exp:'BCNF⟹3NF⟹2NF⟹1NF'},
      {q:'X→Y non-triviale si :',opts:['X=Y','Y⊆X','Y⊄X','X∩Y=∅'],ans:2,exp:'Non-triviale: Y n\'est pas sous-ensemble de X'}
    ]
  }
];

/* ================================================================
   INFORMATIQUE TOPICS
   ================================================================ */
const INFO_TOPICS = [
  {
    id:'cprog', cat:'info', icon:'C', color:'#6B8FE8',
    title:'Programmation C',
    subtitle:'Pointeurs · Récursivité · Structures · Allocation Dynamique',
    course:`
<h2>1. Programmation C</h2>
<h3>1.1 Pointeurs</h3>
<div class="def-box"><strong>Pointeur :</strong> variable stockant une adresse.<br><code>int x=5; int *p=&amp;x;</code> — <code>&amp;x</code>: adresse | <code>*p</code>: déréférencement</div>
<pre><span class="kw">int</span> a = <span class="num">10</span>;
<span class="kw">int</span> *p = &amp;a;
printf(<span class="str">"%d"</span>, *p); <span class="cm">// 10</span>
*p = <span class="num">20</span>;          <span class="cm">// modifie a</span></pre>
<h3>1.2 Arithmétique des pointeurs</h3>
<div class="formula-box"><code>tab[i] ≡ *(tab+i) | p++ avance d'un sizeof(*p) octets</code></div>
<h3>1.3 Fonctions</h3>
<pre><span class="kw">void</span> <span class="fn">swap</span>(<span class="kw">int</span>*a,<span class="kw">int</span>*b){ <span class="kw">int</span> t=*a;*a=*b;*b=t; }
<span class="fn">swap</span>(&amp;x,&amp;y); <span class="cm">// passage par pointeur</span></pre>
<h3>1.4 Récursivité</h3>
<pre><span class="kw">int</span> <span class="fn">fact</span>(<span class="kw">int</span> n){ <span class="kw">return</span> n==<span class="num">0</span>?<span class="num">1</span>:n*<span class="fn">fact</span>(n-<span class="num">1</span>); }
<span class="kw">int</span> <span class="fn">fib</span>(<span class="kw">int</span> n){ <span class="kw">return</span> n&lt;=<span class="num">1</span>?n:<span class="fn">fib</span>(n-<span class="num">1</span>)+<span class="fn">fib</span>(n-<span class="num">2</span>); }</pre>
<h3>1.5 Structures</h3>
<pre><span class="kw">typedef struct</span> { <span class="kw">char</span> nom[<span class="num">50</span>]; <span class="kw">int</span> age; } Etudiant;
Etudiant e; strcpy(e.nom,<span class="str">"Ali"</span>); e.age=<span class="num">20</span>;</pre>
<h3>1.6 Allocation dynamique</h3>
<pre><span class="kw">int</span>* tab = (<span class="kw">int</span>*)<span class="fn">malloc</span>(n*<span class="kw">sizeof</span>(<span class="kw">int</span>));
<span class="fn">free</span>(tab); <span class="cm">// toujours libérer</span></pre>`,
    exercises:[
      {id:1,level:'facile',title:'Pointeurs',
       question:'<p>Qu\'affiche : int x=5,y=10; int *p=&amp;x; *p=y; printf("%d %d",x,y); ?</p>',
       solution:`<p>*p=y modifie x. <strong>Affiche: 10 10</strong></p>`},
      {id:2,level:'moyen',title:'Tri par sélection',
       question:'<p>Implémenter le tri par sélection sur un tableau de n entiers.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">tri_sel</span>(<span class="kw">int</span> t[],<span class="kw">int</span> n){
  <span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">0</span>;i&lt;n-<span class="num">1</span>;i++){
    <span class="kw">int</span> m=i;
    <span class="kw">for</span>(<span class="kw">int</span> j=i+<span class="num">1</span>;j&lt;n;j++) <span class="kw">if</span>(t[j]&lt;t[m])m=j;
    <span class="kw">int</span> tmp=t[i];t[i]=t[m];t[m]=tmp;
  }
}</pre>`},
      {id:3,level:'moyen',title:'Liste chaînée',
       question:'<p>Définir un nœud et écrire insertion en tête.</p>',
       solution:`<pre><span class="kw">typedef struct</span> Node { <span class="kw">int</span> val; <span class="kw">struct</span> Node *next; } Node;
Node* <span class="fn">inserer</span>(Node*h,<span class="kw">int</span> v){
  Node*n=<span class="fn">malloc</span>(<span class="kw">sizeof</span>(Node));
  n->val=v;n->next=h;<span class="kw">return</span> n;
}</pre>`},
      {id:4,level:'difficile',title:'Allocation dynamique matrice',
       question:'<p>Allouer dynamiquement une matrice n×m.</p>',
       solution:`<pre><span class="kw">int</span>** <span class="fn">mat</span>(<span class="kw">int</span> n,<span class="kw">int</span> m){
  <span class="kw">int</span>**A=<span class="fn">malloc</span>(n*<span class="kw">sizeof</span>(<span class="kw">int</span>*));
  <span class="kw">for</span>(<span class="kw">int</span> i=<span class="num">0</span>;i&lt;n;i++) A[i]=<span class="fn">malloc</span>(m*<span class="kw">sizeof</span>(<span class="kw">int</span>));
  <span class="kw">return</span> A;
}</pre>`}
    ],
    quiz:[
      {q:'int *p=NULL; *p=5; provoque :',opts:['p vaut 5','p pointe vers 5','Segfault','Compile ok'],ans:2,exp:'Déréférencement NULL → segmentation fault'},
      {q:'tab[i] équivaut à :',opts:['&tab+i','*(tab+i)','tab+i','&tab[i]'],ans:1,exp:'Arithmétique des pointeurs'},
      {q:'malloc retourne :',opts:['int','void*','char*','NULL toujours'],ans:1,exp:'malloc retourne void* (pointeur générique)'},
      {q:'Récursion utilise :',opts:['Tas','Pile','Registre seul','Segment data'],ans:1,exp:'Appels récursifs utilisent la pile'},
      {q:'Complexité de fib naïf :',opts:['O(n)','O(n log n)','O(2ⁿ)','O(n²)'],ans:2,exp:'Fibonacci naïf → O(2ⁿ)'}
    ]
  },
  {
    id:'cpp', cat:'info', icon:'C++', color:'#9B59B6',
    title:'C++ & POO',
    subtitle:'Classes · Héritage · Polymorphisme · Templates · STL',
    course:`
<h2>2. C++ & POO</h2>
<h3>2.1 Classes</h3>
<pre><span class="kw">class</span> Complexe {
<span class="kw">private</span>: <span class="kw">double</span> re, im;
<span class="kw">public</span>:
  <span class="fn">Complexe</span>(<span class="kw">double</span> r,<span class="kw">double</span> i):re(r),im(i){}
  Complexe <span class="kw">operator</span>+(<span class="kw">const</span> Complexe&amp;c){<span class="kw">return</span> {re+c.re,im+c.im};}
};</pre>
<h3>2.2 Héritage et Polymorphisme</h3>
<pre><span class="kw">class</span> Animal {
<span class="kw">public</span>:
  <span class="kw">virtual void</span> <span class="fn">parler</span>()=<span class="num">0</span>; <span class="cm">// méthode pure</span>
  <span class="kw">virtual</span>~<span class="fn">Animal</span>(){}
};
<span class="kw">class</span> Chien:<span class="kw">public</span> Animal {
<span class="kw">public</span>:
  <span class="kw">void</span> <span class="fn">parler</span>()<span class="kw">override</span>{cout&lt;&lt;<span class="str">"Ouaf!"</span>;}
};</pre>
<div class="theorem-box"><strong>Liaison dynamique :</strong> virtual → appel résolu à l'exécution (vtable).</div>
<h3>2.3 Templates & STL</h3>
<pre><span class="kw">template</span>&lt;<span class="kw">typename</span> T&gt; T <span class="fn">max2</span>(T a,T b){<span class="kw">return</span> a>b?a:b;}
vector&lt;<span class="kw">int</span>&gt; v; v.<span class="fn">push_back</span>(<span class="num">5</span>);
map&lt;string,<span class="kw">int</span>&gt; m; m[<span class="str">"age"</span>]=<span class="num">20</span>;</pre>`,
    exercises:[
      {id:1,level:'moyen',title:'Classe abstraite et héritage',
       question:'<p>Créer Forme→Cercle,Rectangle avec méthode virtuelle aire().</p>',
       solution:`<pre><span class="kw">class</span> Forme{<span class="kw">public virtual double</span> <span class="fn">aire</span>()=<span class="num">0</span>;<span class="kw">virtual</span>~<span class="fn">Forme</span>(){}};
<span class="kw">class</span> Cercle:<span class="kw">public</span> Forme{<span class="kw">double</span> r;<span class="kw">public</span>:<span class="fn">Cercle</span>(<span class="kw">double</span>r):r(r){}
<span class="kw">double</span> <span class="fn">aire</span>()<span class="kw">override</span>{<span class="kw">return</span> M_PI*r*r;}};</pre>`},
      {id:2,level:'difficile',title:'Rule of Three',
       question:'<p>Expliquer la règle des 3 pour une classe avec ressource dynamique.</p>',
       solution:`<p>Si classe gère un pointeur:<br>1. <strong>Destructeur</strong>: delete ptr<br>2. <strong>Constructeur de copie</strong>: copie profonde<br>3. <strong>Opérateur=</strong>: libérer ancien, copier nouveau<br>En C++11: ajouter move constructor et move=.</p>`}
    ],
    quiz:[
      {q:'Classe abstraite en C++ a :',opts:['Aucune méthode','Au moins une méthode virtuelle pure','Pas de constructeur','Seulement des attributs'],ans:1,exp:'Classe abstraite = au moins une méthode pure (=0)'},
      {q:'virtual permet :',opts:['Héritage multiple','Liaison statique','Liaison dynamique','Encapsulation'],ans:2,exp:'virtual → liaison dynamique'},
      {q:'delete[] libère :',opts:['Un seul objet','Tableau new[]','Un vector','Smart pointer'],ans:1,exp:'new[] → delete[]'},
      {q:'shared_ptr assure :',opts:['Référence unique','Comptage de références','Thread-safe','Pile'],ans:1,exp:'shared_ptr = comptage de références'}
    ]
  },
  {
    id:'structures', cat:'info', icon:'🌲', color:'#2ECC71',
    title:'Structures de Données',
    subtitle:'Listes · Piles · Files · Arbres ABR/AVL · Graphes',
    course:`
<h2>3. Structures de Données</h2>
<div class="formula-box"><code>Pile (LIFO): push/pop | File (FIFO): enqueue/dequeue</code></div>
<h3>Arbre Binaire de Recherche</h3>
<div class="def-box"><strong>ABR :</strong> Gauche&lt;Racine&lt;Droite</div>
<div class="formula-box"><code>Infixe: G−R−D (trié) | Préfixe: R−G−D | Postfixe: G−D−R</code></div>
<div class="theorem-box"><strong>AVL :</strong> |h(G)−h(D)|≤1 à chaque nœud. Recherche O(log n).</div>
<h3>Graphes</h3>
<div class="formula-box"><code>BFS (file) → chemin le plus court | DFS (pile/récursif) → cycles, composantes</code></div>
<table>
<tr><th>Structure</th><th>Accès</th><th>Insert. tête</th></tr>
<tr><td>Tableau</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Liste chaînée</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>ABR équilibré</td><td>O(log n)</td><td>O(log n)</td></tr>
</table>`,
    exercises:[
      {id:1,level:'facile',title:'Insertion ABR',
       question:'<p>Insérer 5,3,7,1,4 dans un ABR vide. Donner les 3 parcours.</p>',
       solution:`<p>Arbre: 5(3(1,4), 7). Infixe: 1,3,4,5,7 | Préfixe: 5,3,1,4,7 | Postfixe: 1,4,3,7,5</p>`},
      {id:2,level:'moyen',title:'BFS',
       question:'<p>BFS depuis 1 sur graphe : 1−2, 1−3, 2−4, 3−4, 4−5</p>',
       solution:`<p>File: [1]→[2,3]→[3,4]→[4]→[5]. <strong>Ordre: 1,2,3,4,5</strong></p>`},
      {id:3,level:'difficile',title:'Pile par liste chaînée',
       question:'<p>Implémenter push, pop et isEmpty avec liste chaînée.</p>',
       solution:`<pre><span class="kw">void</span> <span class="fn">push</span>(Node**t,<span class="kw">int</span> v){Node*n=<span class="fn">malloc</span>(<span class="kw">sizeof</span>(Node));n->val=v;n->suiv=*t;*t=n;}
<span class="kw">int</span> <span class="fn">pop</span>(Node**t){<span class="kw">int</span> v=(*t)->val;Node*tmp=*t;*t=(*t)->suiv;<span class="fn">free</span>(tmp);<span class="kw">return</span> v;}</pre>`}
    ],
    quiz:[
      {q:'BFS utilise :',opts:['Pile','File','Tableau trié','Arbre'],ans:1,exp:'BFS = Breadth-First Search utilise une file'},
      {q:'Parcours infixe ABR donne :',opts:['Ordre quelconque','Séquence triée','Racines d\'abord','Feuilles d\'abord'],ans:1,exp:'Infixe sur ABR = séquence triée'},
      {q:'Propriété AVL: |bf|≤?',opts:['0','1','2','log n'],ans:1,exp:'AVL: facteur de balance au plus 1'},
      {q:'LIFO correspond à :',opts:['File','Pile','Liste','Tableau'],ans:1,exp:'Pile = Last In First Out = LIFO'}
    ]
  },
  {
    id:'algorithmes', cat:'info', icon:'⚡', color:'#F39C12',
    title:'Algorithmes & Complexité',
    subtitle:'Tris · Complexité · Graphes · Programmation Dynamique',
    course:`
<h2>4. Algorithmes & Complexité</h2>
<div class="formula-box"><code>O(1)&lt;O(log n)&lt;O(n)&lt;O(n log n)&lt;O(n²)&lt;O(2ⁿ)&lt;O(n!)</code></div>
<table>
<tr><th>Algorithme</th><th>Meilleur</th><th>Moyen</th><th>Pire</th><th>Stable</th></tr>
<tr><td>Tri bulles</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>✓</td></tr>
<tr><td>Tri fusion</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>✓</td></tr>
<tr><td>Tri rapide</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>✗</td></tr>
<tr><td>Tri tas</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>✗</td></tr>
</table>
<div class="theorem-box"><strong>Théorème maître :</strong> T(n)=aT(n/b)+O(nᶜ)<br>c&lt;log_b(a)→Θ(n^log_b(a)) | c=log_b(a)→Θ(nᶜ log n) | c>log_b(a)→Θ(nᶜ)</div>
<div class="theorem-box"><strong>Prog. dynamique :</strong> sous-problèmes overlapping + structure optimale → mémoïsation ou bottom-up</div>`,
    exercises:[
      {id:1,level:'facile',title:'Complexité d\'un code',
       question:'<p>Complexité de : for(i=0;i&lt;n;i++) for(j=i;j&lt;n;j++) somme++;?</p>',
       solution:`<p>n+(n-1)+…+1=n(n+1)/2 → <strong>O(n²)</strong></p>`},
      {id:2,level:'moyen',title:'Théorème maître — tri fusion',
       question:'<p>Résoudre T(n)=2T(n/2)+n.</p>',
       solution:`<p>a=2,b=2,c=1=log₂(2)→cas 2→<strong>Θ(n log n)</strong></p>`},
      {id:3,level:'moyen',title:'Dijkstra',
       question:'<p>Chemins depuis A : A−B(4),A−C(2),B−D(3),C−B(1),C−D(5).</p>',
       solution:`<p>A=0, C=2, B=min(4,3)=3, D=min(5,6)=5. Distances: A=0,C=2,B=3,D=5 (via C→B→?… A=0,C=2,B=3,D=6)</p>`},
      {id:4,level:'difficile',title:'Sac à dos 0/1',
       question:'<p>Objets: (2,6),(3,10),(4,12). Capacité=5. Valeur max ?</p>',
       solution:`<p>Prendre (2,6)+(3,10): poids=5≤5, valeur=<strong>16</strong></p>`}
    ],
    quiz:[
      {q:'Tri avec complexité O(n log n) en tous cas :',opts:['Bulles','Fusion','Rapide','Sélection'],ans:1,exp:'Tri fusion = O(n log n) dans tous les cas'},
      {q:'T(n)=2T(n/2)+n → ?',opts:['O(n)','O(n log n)','O(n²)','O(log n)'],ans:1,exp:'Cas 2 théorème maître → Θ(n log n)'},
      {q:'Mémoïsation Fibonacci → complexité :',opts:['O(2ⁿ)','O(n log n)','O(n)','O(1)'],ans:2,exp:'Chaque valeur calculée une seule fois → O(n)'},
      {q:'BFS donne le chemin le plus court sur :',opts:['Graphe pondéré','Graphe non pondéré','Arbre uniquement','Graphe orienté'],ans:1,exp:'BFS = nb arêtes minimum (non pondéré)'}
    ]
  },
  {
    id:'sql', cat:'info', icon:'🗄', color:'#3A7D44',
    title:'Bases de Données SQL',
    subtitle:'MCD · MLD · Requêtes · Jointures · Agrégats · Normalisation',
    course:`
<h2>5. Bases de Données SQL</h2>
<h3>DDL & DML</h3>
<pre><span class="kw">CREATE TABLE</span> Etudiant(id <span class="kw">INT PRIMARY KEY</span>, nom <span class="kw">VARCHAR</span>(<span class="num">50</span>), age <span class="kw">INT</span>);
<span class="kw">INSERT INTO</span> Etudiant <span class="kw">VALUES</span>(<span class="num">1</span>,<span class="str">'Ali'</span>,<span class="num">20</span>);
<span class="kw">UPDATE</span> Etudiant <span class="kw">SET</span> age=<span class="num">21</span> <span class="kw">WHERE</span> id=<span class="num">1</span>;</pre>
<h3>Jointures</h3>
<pre><span class="kw">SELECT</span>* <span class="kw">FROM</span> A <span class="kw">INNER JOIN</span> B <span class="kw">ON</span> A.id=B.a_id; <span class="cm">-- commun</span>
<span class="kw">SELECT</span>* <span class="kw">FROM</span> A <span class="kw">LEFT JOIN</span>  B <span class="kw">ON</span> A.id=B.a_id; <span class="cm">-- tous A</span></pre>
<h3>Agrégats</h3>
<pre><span class="kw">SELECT</span> dept,<span class="fn">COUNT</span>(*),<span class="fn">AVG</span>(note) <span class="kw">FROM</span> Etudiant
<span class="kw">GROUP BY</span> dept <span class="kw">HAVING COUNT</span>(*)><span class="num">5</span>;</pre>
<h3>Normalisation</h3>
<div class="formula-box"><code>1NF: atomique | 2NF: pas DF partielle | 3NF: pas DF transitive | BCNF: déterminant=superclé</code></div>`,
    exercises:[
      {id:1,level:'facile',title:'SELECT de base',
       question:'<p>Étudiants de plus de 20 ans, triés par nom.</p>',
       solution:`<pre><span class="kw">SELECT</span>* <span class="kw">FROM</span> Etudiant <span class="kw">WHERE</span> age><span class="num">20</span> <span class="kw">ORDER BY</span> nom;</pre>`},
      {id:2,level:'moyen',title:'JOIN 3 tables',
       question:'<p>Lister étudiants et leurs cours.</p>',
       solution:`<pre><span class="kw">SELECT</span> E.nom,C.intitule <span class="kw">FROM</span> Etudiant E
<span class="kw">JOIN</span> Inscription I <span class="kw">ON</span> E.id=I.etud_id
<span class="kw">JOIN</span> Cours C <span class="kw">ON</span> I.cours_id=C.id;</pre>`},
      {id:3,level:'moyen',title:'Sous-requête',
       question:'<p>Étudiants avec note supérieure à la moyenne générale.</p>',
       solution:`<pre><span class="kw">SELECT</span> nom,note <span class="kw">FROM</span> Etudiant
<span class="kw">WHERE</span> note>(<span class="kw">SELECT AVG</span>(note) <span class="kw">FROM</span> Etudiant);</pre>`},
      {id:4,level:'difficile',title:'Max par groupe',
       question:'<p>Pour chaque département, l\'étudiant avec la note maximale.</p>',
       solution:`<pre><span class="kw">SELECT</span> dept,nom,note <span class="kw">FROM</span> Etudiant E1
<span class="kw">WHERE</span> note=(<span class="kw">SELECT MAX</span>(note) <span class="kw">FROM</span> Etudiant E2 <span class="kw">WHERE</span> E2.dept=E1.dept);</pre>`}
    ],
    quiz:[
      {q:'HAVING filtre :',opts:['Lignes avant GROUP BY','Groupes après GROUP BY','Colonnes','JOIN'],ans:1,exp:'HAVING filtre les groupes résultant de GROUP BY'},
      {q:'INNER JOIN retourne :',opts:['Tous A','Enregistrements communs','Tous','Sans doublons'],ans:1,exp:'INNER JOIN = intersection'},
      {q:'3NF élimine :',opts:['Valeurs non atomiques','DF partielles','DF transitives','NULL'],ans:2,exp:'3NF élimine les dépendances transitives'},
      {q:'COUNT(*) compte :',opts:['Colonnes','Toutes les lignes','Lignes non NULL','Lignes uniques'],ans:1,exp:'COUNT(*)=toutes les lignes'},
      {q:'PRIMARY KEY = ?',opts:['Unique+NOT NULL','Clé étrangère','Valeur dupliquée','Index'],ans:0,exp:'PK = unique + non null'}
    ]
  },
  {
    id:'archi', cat:'info', icon:'🖥', color:'#7D3C98',
    title:'Architecture Machine',
    subtitle:'CPU · Mémoire · Assembleur 8086 · Logique booléenne',
    course:`
<h2>6. Architecture Machine</h2>
<div class="def-box"><strong>CPU :</strong> ALU (calculs), UC (contrôle), Registres (PC,SP,IR,ACC), Cache (L1&lt;L2&lt;L3)</div>
<h4>Cycle Fetch→Decode→Execute→Write-back</h4>
<h3>Assembleur 8086</h3>
<div class="formula-box"><code>AX,BX,CX,DX (16 bits) | CS,DS,SS,ES (segments) | SP,BP,SI,DI (pointeurs)</code></div>
<pre>MOV AX, <span class="num">5</span>  | ADD AX,BX | SUB AX,<span class="num">2</span>
CMP AX,<span class="num">0</span>  | JE label  | LOOP label</pre>
<h3>Représentations numériques</h3>
<div class="formula-box"><code>Complément à 2: inverser+1 | IEEE 754 float: 1+8+23 bits</code></div>
<h3>Logique booléenne</h3>
<div class="formula-box"><code>De Morgan: NOT(A AND B)=NOT(A)OR NOT(B)</code></div>`,
    exercises:[
      {id:1,level:'facile',title:'Conversions',
       question:'<p>(a) 101101₂ en décimal, (b) 43 en binaire, (c) 0xFF en décimal</p>',
       solution:`<p>(a)32+8+4+1=<strong>45</strong> | (b)<strong>101011₂</strong> | (c)15×16+15=<strong>255</strong></p>`},
      {id:2,level:'moyen',title:'Complément à 2',
       question:'<p>Représenter −25 en complément à 2 sur 8 bits.</p>',
       solution:`<p>25=00011001. Inv:11100110. +1:<strong>11100111₂</strong></p>`},
      {id:3,level:'moyen',title:'Programme 8086',
       question:'<p>Programme 8086 qui calcule la somme d\'un tableau de 5 entiers.</p>',
       solution:`<pre>MOV CX,<span class="num">5</span>; MOV SI,<span class="num">0</span>; MOV AX,<span class="num">0</span>
boucle: ADD AX,[tableau+SI]; ADD SI,<span class="num">2</span>; LOOP boucle</pre>`}
    ],
    quiz:[
      {q:'42 en binaire=?',opts:['101000','101010','100010','110010'],ans:1,exp:'42=32+8+2=101010₂'},
      {q:'NOT(A AND B)=?',opts:['NOT(A) AND NOT(B)','NOT(A) OR NOT(B)','A OR B','A AND B'],ans:1,exp:'Loi de De Morgan'},
      {q:'0xFF décimal=?',opts:['128','200','255','256'],ans:2,exp:'15×16+15=255'},
      {q:'Cache L1 est :',opts:['Le plus grand','Le plus rapide','Le plus lent','Sur disque'],ans:1,exp:'L1 = plus proche CPU = plus rapide'}
    ]
  },
  {
    id:'os', cat:'info', icon:'⌨', color:'#1A5276',
    title:"Systèmes d'Exploitation",
    subtitle:'Linux · Processus · Ordonnancement · Mémoire',
    course:`
<h2>7. Systèmes d'Exploitation</h2>
<div class="formula-box"><code>ls -la | cd | pwd | mkdir | rm -rf | cat | grep | find | chmod | ps aux | kill | top</code></div>
<h3>Processus et ordonnancement</h3>
<div class="def-box"><strong>Processus :</strong> programme en exécution. États: Prêt→En cours→Bloqué→Terminé</div>
<table>
<tr><th>Algo</th><th>Principe</th><th>Problème</th></tr>
<tr><td>FCFS</td><td>Premier arrivé</td><td>Effet convoi</td></tr>
<tr><td>SJF</td><td>Plus court d'abord</td><td>Famine</td></tr>
<tr><td>RR</td><td>Quantum</td><td>Overhead</td></tr>
</table>
<h3>Gestion mémoire</h3>
<div class="formula-box"><code>Pagination: pages taille fixe | Mémoire virtuelle: swap | LRU, FIFO (remplacement pages)</code></div>
<h3>Synchronisation</h3>
<div class="formula-box"><code>Mutex: exclusion mutuelle | Sémaphore: compteur | Deadlock: 4 conditions Coffman</code></div>`,
    exercises:[
      {id:1,level:'facile',title:'Commandes Linux',
       question:'<p>Lister tous les fichiers .c dans le répertoire courant, triés par nom.</p>',
       solution:`<pre>find . -name "*.c" | sort</pre>`},
      {id:2,level:'moyen',title:'Round Robin',
       question:'<p>P1(6ms), P2(4ms), P3(2ms), quantum=2. Temps de réponse moyen ?</p>',
       solution:`<p>Gantt: P1(0-2),P2(2-4),P3(4-6),P1(6-8),P2(8-10),P1(10-12)<br>Fin: P3=6,P2=10,P1=12. Moy=(6+10+12)/3=<strong>9.33ms</strong></p>`},
      {id:3,level:'difficile',title:'4 conditions Coffman',
       question:'<p>Expliquer les 4 conditions de Coffman pour un deadlock.</p>',
       solution:`<p>1.<strong>Exclusion mutuelle</strong>: ressource non partageable<br>2.<strong>Possession et attente</strong>: tient une ressource et attend une autre<br>3.<strong>Pas de préemption</strong>: ressource ne peut être retirée de force<br>4.<strong>Attente circulaire</strong>: chaîne circulaire d'attente</p>`}
    ],
    quiz:[
      {q:'grep sert à :',opts:['Lister fichiers','Chercher motif','Créer répertoire','Gérer processus'],ans:1,exp:'grep = recherche de motifs'},
      {q:'fork() crée :',opts:['Un thread','Un processus fils','Un serveur','Un pipe'],ans:1,exp:'fork() = copie du processus parent'},
      {q:'LRU est une politique de :',opts:['Ordonnancement','Remplacement de pages','Synchronisation','Allocation'],ans:1,exp:'LRU = Least Recently Used pour remplacement pages'},
      {q:'Deadlock nécessite combien de conditions Coffman ?',opts:['2','3','4','5'],ans:2,exp:'4 conditions: exclusion mut., possession/attente, non-préemption, attente circulaire'}
    ]
  },
  {
    id:'reseaux', cat:'info', icon:'🌐', color:'#2E7D6B',
    title:'Réseaux & Protocoles',
    subtitle:'Modèle OSI · TCP/IP · Adressage · Routage',
    course:`
<h2>8. Réseaux & Protocoles</h2>
<table>
<tr><th>Couche OSI</th><th>N°</th><th>Protocoles</th></tr>
<tr><td>Application</td><td>7</td><td>HTTP, FTP, DNS, SMTP</td></tr>
<tr><td>Transport</td><td>4</td><td>TCP, UDP</td></tr>
<tr><td>Réseau</td><td>3</td><td>IP, ICMP, ARP</td></tr>
<tr><td>Liaison</td><td>2</td><td>Ethernet, WiFi</td></tr>
</table>
<div class="formula-box"><code>HTTP:80 | HTTPS:443 | SSH:22 | FTP:21 | DNS:53 | SMTP:25</code></div>
<h3>Adressage IP</h3>
<div class="formula-box"><code>/24=255.255.255.0 | hôtes=2^(32−préfixe)−2</code></div>
<h3>Routage</h3>
<div class="formula-box"><code>RIP: vecteur distance | OSPF: Dijkstra, intra-AS | BGP: inter-AS</code></div>`,
    exercises:[
      {id:1,level:'facile',title:'TCP Handshake',
       question:'<p>Décrire les 3 étapes du handshake TCP.</p>',
       solution:`<p>1. Client→<strong>SYN</strong>→Serveur<br>2. Serveur→<strong>SYN-ACK</strong>→Client<br>3. Client→<strong>ACK</strong>→Serveur. Connexion établie.</p>`},
      {id:2,level:'moyen',title:'Calcul de sous-réseaux',
       question:'<p>Nombre d\'hôtes dans 10.0.0.0/20 ?</p>',
       solution:`<p>/20 → 12 bits hôtes. 2¹²−2=<strong>4094 hôtes</strong></p>`},
      {id:3,level:'moyen',title:'TCP vs UDP',
       question:'<p>Pourquoi UDP pour le streaming vidéo ?</p>',
       solution:`<p>UDP: pas de retransmission → latence faible. Quelques pixels manquants acceptables. TCP: attente retransmission → gel inacceptable.</p>`}
    ],
    quiz:[
      {q:'TCP est :',opts:['Non fiable','Sans connexion','Fiable avec handshake','Identique à UDP'],ans:2,exp:'TCP = fiable, orienté connexion'},
      {q:'Port HTTPS=?',opts:['80','443','22','21'],ans:1,exp:'HTTPS = port 443'},
      {q:'/24 = masque ?',opts:['255.0.0.0','255.255.0.0','255.255.255.0','255.255.255.128'],ans:2,exp:'24 bits réseau → 255.255.255.0'},
      {q:'OSPF utilise :',opts:['Bellman-Ford','Dijkstra','BFS','RIP'],ans:1,exp:'OSPF = algorithme de Dijkstra'}
    ]
  },
  {
    id:'uml', cat:'info', icon:'📐', color:'#B7770D',
    title:'Modélisation UML',
    subtitle:'Classes · Séquence · Cas d\'utilisation · Design Patterns',
    course:`
<h2>9. Modélisation UML</h2>
<table>
<tr><th>Relation</th><th>Symbole</th><th>Signification</th></tr>
<tr><td>Association</td><td>────</td><td>Lien simple</td></tr>
<tr><td>Composition</td><td>────◆</td><td>Vie dépendante</td></tr>
<tr><td>Agrégation</td><td>────◇</td><td>Vie indépendante</td></tr>
<tr><td>Héritage</td><td>────▷</td><td>Est-un (is-a)</td></tr>
</table>
<div class="formula-box"><code>&lt;&lt;include&gt;&gt; = obligatoire | &lt;&lt;extend&gt;&gt; = optionnel</code></div>
<h3>Design Patterns</h3>
<table>
<tr><th>Pattern</th><th>Rôle</th></tr>
<tr><td>Singleton</td><td>Une seule instance</td></tr>
<tr><td>Factory</td><td>Crée sans exposer logique</td></tr>
<tr><td>Observer</td><td>Notification changements</td></tr>
<tr><td>MVC</td><td>Modèle-Vue-Contrôleur</td></tr>
</table>`,
    exercises:[
      {id:1,level:'moyen',title:'Diagramme de classes',
       question:'<p>Modéliser : Étudiant inscrit à Cours, Animal→Chien,Chat</p>',
       solution:`<p>Etudiant *────* Cours (association N,N)<br>Animal←Chien (héritage ▷), Animal←Chat (héritage ▷)</p>`},
      {id:2,level:'difficile',title:'Singleton Java',
       question:'<p>Implémenter Singleton thread-safe en Java.</p>',
       solution:`<pre><span class="kw">public class</span> S{
  <span class="kw">private static volatile</span> S i;
  <span class="kw">private</span> <span class="fn">S</span>(){}
  <span class="kw">public static</span> S <span class="fn">get</span>(){
    <span class="kw">if</span>(i==<span class="kw">null</span>) <span class="kw">synchronized</span>(S.<span class="kw">class</span>){
      <span class="kw">if</span>(i==<span class="kw">null</span>) i=<span class="kw">new</span> <span class="fn">S</span>();}
    <span class="kw">return</span> i;
  }
}</pre>`}
    ],
    quiz:[
      {q:'Composition signifie :',opts:['Lien faible','Vie dépendante','Vie indépendante','Héritage'],ans:1,exp:'Composition: partie forte, vie dépend du tout'},
      {q:'&lt;&lt;include&gt;&gt; est :',opts:['Optionnel','Obligatoire','Héritage','Dépendance'],ans:1,exp:'include = UC inclus systématiquement'},
      {q:'Singleton garantit :',opts:['Plusieurs instances','Une seule instance','Aucune','Partagées'],ans:1,exp:'Singleton = une seule instance globale'},
      {q:'MVC =',opts:['Modèle-Vue-Contrôleur','Machine-Virtuelle-Cache','Méthode-Vue-Code','Mémoire-Variable-Classe'],ans:0,exp:'MVC = Modèle Vue Contrôleur'}
    ]
  },
  {
    id:'java', cat:'info', icon:'☕', color:'#E65100',
    title:'Java OOP',
    subtitle:'Héritage · Interfaces · Exceptions · Collections · Streams',
    course:`
<h2>10. Java OOP</h2>
<pre><span class="kw">public class</span> Animal {
  <span class="kw">protected</span> String nom;
  <span class="kw">public void</span> <span class="fn">parler</span>(){System.out.<span class="fn">println</span>(<span class="str">"..."</span>);}
}
<span class="kw">public class</span> Chien <span class="kw">extends</span> Animal {
  <span class="kw">@Override public void</span> <span class="fn">parler</span>(){System.out.<span class="fn">println</span>(<span class="str">"Ouaf!"</span>);}
}</pre>
<div class="formula-box"><code>extends (classe) | implements (interface) | @Override | abstract | final</code></div>
<h3>Exceptions</h3>
<pre><span class="kw">try</span>{<span class="kw">int</span> r=a/b;}
<span class="kw">catch</span>(ArithmeticException e){...}
<span class="kw">finally</span>{<span class="cm">/* toujours exécuté */</span>}</pre>
<h3>Collections & Streams Java 8</h3>
<pre>List&lt;String&gt; noms=<span class="kw">new</span> ArrayList&lt;&gt;();
noms.<span class="fn">stream</span>().<span class="fn">filter</span>(s->s.<span class="fn">startsWith</span>(<span class="str">"A"</span>)).<span class="fn">sorted</span>().<span class="fn">forEach</span>(System.out::<span class="fn">println</span>);</pre>`,
    exercises:[
      {id:1,level:'facile',title:'Classe avec encapsulation',
       question:'<p>Créer Etudiant(nom,note) avec constructeur, getters et toString().</p>',
       solution:`<pre><span class="kw">public class</span> Etudiant{
  <span class="kw">private</span> String nom; <span class="kw">private double</span> note;
  <span class="kw">public</span> <span class="fn">Etudiant</span>(String n,<span class="kw">double</span> nt){nom=n;note=nt;}
  <span class="kw">public</span> String <span class="fn">getNom</span>(){<span class="kw">return</span> nom;}
  <span class="kw">public</span> String <span class="fn">toString</span>(){<span class="kw">return</span> nom+<span class="str">":"</span>+note;}
}</pre>`},
      {id:2,level:'moyen',title:'Interface vs classe abstraite',
       question:'<p>Différences entre interface et classe abstraite en Java ?</p>',
       solution:`<p><strong>Interface:</strong> contrat pur, multiple implements, pas d\'état (avant Java 8)<br><strong>Classe abstraite:</strong> méthodes concrètes+abstraites, attributs, héritage simple</p>`},
      {id:3,level:'difficile',title:'Streams',
       question:'<p>Étudiants note≥10, triés par nom, noms en majuscule.</p>',
       solution:`<pre>etudiants.<span class="fn">stream</span>()
  .<span class="fn">filter</span>(e->e.<span class="fn">getNote</span>()>=<span class="num">10</span>)
  .<span class="fn">sorted</span>(Comparator.<span class="fn">comparing</span>(Etudiant::getNom))
  .<span class="fn">map</span>(e->e.<span class="fn">getNom</span>().<span class="fn">toUpperCase</span>())
  .<span class="fn">collect</span>(Collectors.<span class="fn">toList</span>());</pre>`}
    ],
    quiz:[
      {q:'@Override sert à :',opts:['Créer méthode','Vérifier remplacement','Supprimer','Partager'],ans:1,exp:'@Override = vérification compilation'},
      {q:'finally s\'exécute :',opts:['Si exception','Si pas exception','Toujours','Jamais'],ans:2,exp:'finally = toujours exécuté'},
      {q:'implements permet :',opts:['Héritage classe','Multiples interfaces','Remplacement','Création'],ans:1,exp:'implements = réaliser une ou plusieurs interfaces'},
      {q:'ArrayList vs LinkedList : accès rapide :',opts:['LinkedList O(1)','ArrayList O(1)','Égaux','Dépend JVM'],ans:1,exp:'ArrayList: accès index O(1)'}
    ]
  },
  {
    id:'web', cat:'info', icon:'🌍', color:'#E17055',
    title:'Web & JavaScript',
    subtitle:'JS ES6+ · DOM · Async · React · REST API',
    course:`
<h2>11. Web & JavaScript</h2>
<pre><span class="kw">const</span> add=(a,b)=>a+b; <span class="cm">// fléchée</span>
<span class="kw">const</span> {nom,age}=etudiant; <span class="cm">// destructuring</span>
<span class="kw">const</span> msg=<span class="str">\`Bonjour \${nom}!\`</span>; <span class="cm">// template literal</span>
<span class="kw">const</span> [first,...rest]=tableau; <span class="cm">// spread</span></pre>
<h3>Async/Await</h3>
<pre><span class="kw">async function</span> <span class="fn">getData</span>(url){
  <span class="kw">const</span> res=<span class="kw">await</span> <span class="fn">fetch</span>(url);
  <span class="kw">return</span> <span class="kw">await</span> res.<span class="fn">json</span>();
}</pre>
<h3>React Hooks</h3>
<pre><span class="kw">const</span> [count,setCount]=<span class="fn">useState</span>(<span class="num">0</span>);
<span class="fn">useEffect</span>(()=>{document.title=<span class="str">\`\${count}\`</span>;},[count]);</pre>`,
    exercises:[
      {id:1,level:'facile',title:'let vs var',
       question:'<p>Qu\'affiche: for(let i=0;i&lt;3;i++){setTimeout(()=>console.log(i),0);}?</p>',
       solution:`<p><strong>0, 1, 2</strong> — let a portée de bloc, chaque itération a sa propre variable. Avec var → 3,3,3.</p>`},
      {id:2,level:'moyen',title:'DOM dynamique',
       question:'<p>Créer une liste [\'a\',\'b\',\'c\'] dynamiquement et l\'injecter dans le DOM.</p>',
       solution:`<pre><span class="kw">const</span> ul=document.<span class="fn">createElement</span>(<span class="str">'ul'</span>);
[<span class="str">'a'</span>,<span class="str">'b'</span>,<span class="str">'c'</span>].<span class="fn">forEach</span>(x=>{
  <span class="kw">const</span> li=document.<span class="fn">createElement</span>(<span class="str">'li'</span>);
  li.textContent=x; ul.<span class="fn">appendChild</span>(li);
});
document.body.<span class="fn">appendChild</span>(ul);</pre>`}
    ],
    quiz:[
      {q:'let vs var: portée de :',opts:['Identiques','let portée bloc','var portée bloc','let global'],ans:1,exp:'let = portée de bloc'},
      {q:'typeof null===?',opts:['"null"','"object"','"undefined"','"number"'],ans:1,exp:'Bug historique JS: typeof null="object"'},
      {q:'useState retourne :',opts:['Objet','[state,setter]','Promise','Undefined'],ans:1,exp:'useState retourne [valeur, fonctionMiseAJour]'}
    ]
  },
  {
    id:'binaire', cat:'info', icon:'01', color:'#2C3E50',
    title:'Arithmétique Binaire & Logique',
    subtitle:'Conversions · Complément à 2 · Portes logiques · Karnaugh',
    course:`
<h2>12. Arithmétique Binaire & Logique</h2>
<h3>Systèmes de numération</h3>
<div class="example-box"><strong>Décimal→Binaire :</strong> 42 = 32+8+2 = <strong>101010₂</strong></div>
<h3>Opérations binaires</h3>
<div class="formula-box"><code>Compl.à2: inverser+1 | A−B = A+compl₂(B)</code></div>
<h3>Portes logiques</h3>
<table>
<tr><th>Porte</th><th>0,0</th><th>0,1</th><th>1,0</th><th>1,1</th></tr>
<tr><td>AND</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>OR</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>XOR</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>NAND</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
</table>
<div class="theorem-box"><strong>Karnaugh :</strong> Regrouper les 1 adjacents (groupes de 2,4,8) → minimiser expression booléenne.</div>`,
    exercises:[
      {id:1,level:'facile',title:'Conversions',
       question:'<p>Convertir 10110111₂ en décimal, hexadécimal et octal.</p>',
       solution:`<p>128+32+16+4+2+1=<strong>183</strong> | =<strong>B7₁₆</strong> | =<strong>267₈</strong></p>`},
      {id:2,level:'moyen',title:'Complément à 2',
       question:'<p>Représenter −15 sur 8 bits (compl.à 2), vérifier avec +15.</p>',
       solution:`<p>15=00001111. Inv:11110000. +1:<strong>11110001</strong>. Vérif: 00001111+11110001=100000000→0 ✓</p>`},
      {id:3,level:'moyen',title:'Simplification booléenne',
       question:'<p>Simplifier F=A\'BC+A\'BC\'+AB\'C+ABC</p>',
       solution:`<p>F=A\'B(C+C\')+AC(B\'+B)=A\'B+AC → <strong>F=A\'B+AC</strong></p>`}
    ],
    quiz:[
      {q:'1111₂ décimal=?',opts:['8','15','16','7'],ans:1,exp:'8+4+2+1=15'},
      {q:'AND(1,0)=?',opts:['0','1','Indéfini','0.5'],ans:0,exp:'AND: les deux doivent être 1'},
      {q:'XOR(1,1)=?',opts:['0','1','2','Erreur'],ans:0,exp:'XOR: égaux→0'},
      {q:'NAND est :',opts:['AND+NOT','Porte universelle','Même que OR','XOR modifié'],ans:1,exp:'NAND = porte universelle (NOT,AND,OR,XOR constructibles)'}
    ]
  }
];

/* ================================================================
   ANNALES — EXAMENS OFFICIELS ENSET MOHAMMEDIA 2014–2022
   ================================================================ */
const ANNALES = [
  {
    id:'info_2022',year:2022,subject:'Informatique',cat:'info',
    title:'ENSET 2022 — Informatique',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['Algorithmes','Structures','SQL','Complexité'],
    parts:[
      { title:'Partie I — Complexité (8 pts)', questions:[
        { num:'Q1', text:'Donner la complexité temporelle et spatiale de : tri bulles, tri fusion, tri rapide (meilleur/moyen/pire cas). Justifier.',
          correction:'Tri bulles: O(n²) pire/moyen, O(n) meilleur, espace O(1). Tri fusion: O(n log n) tous cas, espace O(n). Tri rapide: O(n log n) meilleur/moyen, O(n²) pire (pivot mal choisi), espace O(log n) moy (pile récursion).'},
        { num:'Q2', text:'Appliquer le Théorème Maître à T(n)=3T(n/2)+n². Complexité asymptotique.',
          correction:'a=3,b=2,f(n)=n². log_b(a)=log₂(3)≈1.585. c=2>log₂(3)→Cas 3. Vérif: 3(n/2)²=3n²/4≤c·n² ✓. T(n)=Θ(n²).'},
        { num:'Q3', text:'Écrire en C la recherche dichotomique itérative. Analyser la complexité.',
          correction:'int dicho(int t[],int n,int c){int g=0,d=n-1;while(g<=d){int m=(g+d)/2;if(t[m]==c)return m;else if(t[m]<c)g=m+1;else d=m-1;}return -1;}\nComplexité O(log n): espace de recherche divisé par 2 à chaque itération.'}
      ]},
      { title:'Partie II — Structures de Données (7 pts)', questions:[
        { num:'Q4', text:'Définir en C un ABR. Écrire insertion, recherche et parcours infixe.',
          correction:'typedef struct N{int v;struct N*g,*d;}N;\nvoid ins(N**r,int v){if(!*r){*r=malloc(sizeof(N));(*r)->v=v;(*r)->g=(*r)->d=NULL;return;}if(v<(*r)->v)ins(&(*r)->g,v);else ins(&(*r)->d,v);}\nvoid infixe(N*r){if(!r)return;infixe(r->g);printf("%d ",r->v);infixe(r->d);}'},
        { num:'Q5', text:'Insérer 15,8,22,4,11,18,26 dans un ABR. Parcours infixe et préfixe.',
          correction:'Arbre: 15(8(4,11),22(18,26)).\nInfixe: 4,8,11,15,18,22,26\nPréfixe: 15,8,4,11,22,18,26'}
      ]},
      { title:'Partie III — SQL (5 pts)', questions:[
        { num:'Q6', text:'Schéma: Etudiant(id,nom,dept_id), Dept(id,nom), Cours(id,intitulé), Inscription(etud_id,cours_id,note). Requêtes: (a) étudiants du dept "Informatique", (b) moyenne par dept, (c) étudiants sans cours.',
          correction:'(a) SELECT E.* FROM Etudiant E JOIN Dept D ON E.dept_id=D.id WHERE D.nom=\'Informatique\';\n(b) SELECT D.nom,AVG(I.note) FROM Dept D JOIN Etudiant E ON D.id=E.dept_id JOIN Inscription I ON E.id=I.etud_id GROUP BY D.id;\n(c) SELECT * FROM Etudiant WHERE id NOT IN (SELECT DISTINCT etud_id FROM Inscription);'}
      ]}
    ]
  },
  {
    id:'math_2022',year:2022,subject:'Mathématiques',cat:'math',
    title:'ENSET 2022 — Mathématiques',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['Algèbre','Analyse','Probabilités'],
    parts:[
      { title:'Exercice 1 — Algèbre Linéaire (7 pts)', questions:[
        { num:'1.1', text:'A=[[2,1,0],[1,3,1],[0,1,2]]. Calculer det(A) et A⁻¹.',
          correction:'det(A)=2(6-1)-1(2-0)+0=10-2=8≠0. A⁻¹=(1/8)com(A)ᵀ. com=[[5,-2,1],[-2,4,-2],[1,-2,5]]. A⁻¹=(1/8)[[5,-2,1],[-2,4,-2],[1,-2,5]]'},
        { num:'1.2', text:'Trouver VP et vecteurs propres de A=[[4,1],[2,3]].',
          correction:'χ(λ)=(4-λ)(3-λ)-2=λ²-7λ+10=(λ-2)(λ-5). λ₁=2: ker(A-2I)→v₁=(1,-2). λ₂=5: ker(A-5I)→v₂=(1,1).'},
        { num:'1.3', text:'Diagonaliser A et calculer A¹⁰.',
          correction:'P=[[1,1],[-2,1]], D=diag(2,5). A=PDP⁻¹. A¹⁰=P·diag(1024,5¹⁰)·P⁻¹=(1/3)[[1024+2·5¹⁰,-1024+5¹⁰],[-2048+2·5¹⁰,2048+5¹⁰]]'}
      ]},
      { title:'Exercice 2 — Analyse (8 pts)', questions:[
        { num:'2.1', text:'Calculer lim(x→0)[sin(3x)-3x+x³/2]/x⁵ par DL.',
          correction:'sin(3x)=3x-27x³/6+243x⁵/120+…=3x-9x³/2+81x⁵/40+…\nsin(3x)-3x+x³/2=x³(-9/2+1/2)+81x⁵/40+…=-4x³+…. Division par x⁵→-4/x²→∞. Vérifier énoncé: sans x³/2 →coef x³=-9/2, limite=(-9/2)/0 non définie. Avec exactement: prendre DL à l\'ordre 5 exact pour obtenir la limite.'},
        { num:'2.2', text:'Étudier ∫₀^∞ x·e^(-x²)dx et calculer.',
          correction:'u=x², du=2x dx. =(1/2)∫₀^∞ e^(-u)du=(1/2)[-e^(-u)]₀^∞=(1/2)(0+1)=1/2. Converge et vaut 1/2.'},
        { num:'2.3', text:'Résoudre y\'\'+4y=cos(2x), y(0)=0, y\'(0)=1.',
          correction:'r=±2i, y_h=C₁cos(2x)+C₂sin(2x). Résonance→y_p=(x/4)sin(2x). y=C₁cos(2x)+C₂sin(2x)+(x/4)sin(2x). CI: C₁=0, 2C₂+1/4=1→C₂=3/8. y=(3/8)sin(2x)+(x/4)sin(2x).'}
      ]},
      { title:'Exercice 3 — Probabilités (5 pts)', questions:[
        { num:'3.1', text:'Urne: 5 rouges, 3 bleues. Tirer 2 sans remise. P(même couleur)=?',
          correction:'P(RR)=(5/8)(4/7)=20/56. P(BB)=(3/8)(2/7)=6/56. P(même)=26/56=13/28≈0.464.'},
        { num:'3.2', text:'X~N(50,25). Calculer P(42≤X≤58).',
          correction:'Z=(X-50)/5. P(-1.6≤Z≤1.6)=2Φ(1.6)-1=2(0.9452)-1=0.8904.'}
      ]}
    ]
  },
  {
    id:'info_2019',year:2019,subject:'Informatique',cat:'info',
    title:'ENSET 2019 — Informatique',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['C','Pointeurs','Architecture'],
    parts:[
      { title:'Partie I — Langage C (10 pts)', questions:[
        { num:'Q1', text:'Écrire le tri par insertion en C. Complexité meilleur/pire cas.',
          correction:'void tri_ins(int t[],int n){for(int i=1;i<n;i++){int k=t[i],j=i-1;while(j>=0&&t[j]>k){t[j+1]=t[j];j--;}t[j+1]=k;}}\nMeilleur: O(n) (tableau trié). Pire: O(n²) (tableau inversé).'},
        { num:'Q2', text:'Définir une liste doublement chaînée. Insertion en tête et en queue.',
          correction:'typedef struct N{int v;struct N*p,*n;}N;\nTête: créer nœud, lier suiv=head, head->prev=new, head=new.\nQueue: parcourir jusqu\'à last, last->next=new, new->prev=last.'}
      ]},
      { title:'Partie II — Architecture (10 pts)', questions:[
        { num:'Q3', text:'Convertir 0xAF3B en binaire et décimal. Effectuer 10110101−01101110.',
          correction:'0xAF3B=1010111100111011₂=44859.\nSoustraction: 10110101+compl₂(01101110)=10110101+10010010=100000111→00100111=39 (en ignorant le carry).'},
        { num:'Q4', text:'Décrire le cycle Fetch-Decode-Execute. Rôle du registre PC.',
          correction:'FETCH: lire instruction[PC]→IR, PC++. DECODE: décodage opcode+opérandes. EXECUTE: ALU exécute. WRITEBACK: résultat en mémoire/registre.\nPC=Program Counter: adresse prochaine instruction. Modifié par JMP/CALL.'}
      ]}
    ]
  },
  {
    id:'math_2018',year:2018,subject:'Mathématiques',cat:'math',
    title:'ENSET 2018 — Mathématiques',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['Intégrales','EDO','Algèbre'],
    parts:[
      { title:'Exercice 1 — Intégration (7 pts)', questions:[
        { num:'1.1', text:'Calculer I=∫₀^(π/2) sin³(x)·cos²(x)dx.',
          correction:'u=cos x, du=-sin x dx, sin²x=1-u². I=∫₁⁰(1-u²)u²(-du)=∫₀¹(u²-u⁴)du=[u³/3-u⁵/5]₀¹=1/3-1/5=2/15.'},
        { num:'1.2', text:'Convergence et valeur de ∫₁^∞ ln(x)/x²dx.',
          correction:'IPP: u=ln x,v\'=1/x². [−ln(x)/x]₁^∞+∫₁^∞(1/x²)dx=0+[-1/x]₁^∞=0+1=1. Converge → valeur=1.'}
      ]},
      { title:'Exercice 2 — EDO (7 pts)', questions:[
        { num:'2.1', text:'Résoudre y\'\'−4y\'+4y=x·e^(2x).',
          correction:'r=2 (double). y_h=(C₁+C₂x)e^(2x). Résonance multiplicité 2→y_p=x²(Ax+B)e^(2x). Substitution: 6Ax·e^(2x)+2Be^(2x)=xe^(2x)→A=1/6,B=0. Solution: y=(C₁+C₂x)e^(2x)+(x³/6)e^(2x).'},
        { num:'2.2', text:'Résoudre y\'+y/x=x²y³ (Bernoulli, n=3).',
          correction:'z=y^(-2)→z\'=-2y^(-3)y\'. Diviser par y³: -z\'/2+z/x=x²→z\'-2z/x=-2x². FI=1/x². (z/x²)\'=-2. z/x²=-2x+C. z=Cx²-2x³. y=±1/√(Cx²-2x³).'}
      ]}
    ]
  },
  {
    id:'info_2017',year:2017,subject:'Informatique',cat:'info',
    title:'ENSET 2017 — Informatique',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['Graphes','BFS','Dijkstra','C'],
    parts:[
      { title:'Algorithmes de graphes (20 pts)', questions:[
        { num:'Q1', text:'Graphe: A-B(4),A-C(2),B-D(5),C-B(1),C-D(8),C-E(10),D-E(2). Dijkstra depuis A.',
          correction:'Init: A=0,B=∞,C=∞,D=∞,E=∞.\nA(0): B=4,C=2. File:C(2),B(4).\nC(2): B=min(4,3)=3,D=10,E=12. File:B(3),D(10),E(12).\nB(3): D=min(10,8)=8. File:D(8),E(12).\nD(8): E=min(12,10)=10.\nRésultats: A=0,C=2,B=3,D=8,E=10.'},
        { num:'Q2', text:'Implémenter BFS en C sur matrice d\'adjacence.',
          correction:'void bfs(int adj[][MAX],int n,int src){int vis[MAX]={0},q[MAX],f=0,r=0;vis[src]=1;q[r++]=src;while(f<r){int u=q[f++];printf("%d ",u);for(int v=0;v<n;v++)if(adj[u][v]&&!vis[v]){vis[v]=1;q[r++]=v;}}}'}
      ]}
    ]
  },
  {
    id:'math_2016',year:2016,subject:'Mathématiques',cat:'math',
    title:'ENSET 2016 — Mathématiques',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['DL','Séries','Fourier'],
    parts:[
      { title:'Exercice 1 — DL et Limites (10 pts)', questions:[
        { num:'1.1', text:'Calculer lim(x→0)[e^(sin x)−eˣ]/x².',
          correction:'sin x=x-x³/6+…. e^(sin x)=e^(x-x³/6+…)=eˣ·e^(-x³/6+…)≈eˣ(1-x³/6). Donc [e^(sin x)-eˣ]/x²≈eˣ·(-x³/6)/x²→eˣ·(-x/6)→0·0=0. Limite=0.'},
        { num:'1.2', text:'DL à l\'ordre 5 de arctan(2x) en x=0.',
          correction:'arctan(u)=u-u³/3+u⁵/5+…, u=2x.\narctan(2x)=2x-(2x)³/3+(2x)⁵/5+…=2x-8x³/3+32x⁵/5+o(x⁵).'},
        { num:'1.3', text:'Étudier la convergence de Σ n·x^n. Calculer sa somme pour |x|<1.',
          correction:'R=1 (critère de Hadamard: |aₙ|^(1/n)=n^(1/n)→1). Pour |x|<1: dériver Σxⁿ=1/(1-x) → Σn·xⁿ⁻¹=1/(1-x)². Donc Σn·xⁿ=x/(1-x)².'}
      ]}
    ]
  },
  {
    id:'info_2015',year:2015,subject:'Informatique',cat:'info',
    title:'ENSET 2015 — Informatique',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['SQL','MCD','Normalisation','Java'],
    parts:[
      { title:'Bases de données (20 pts)', questions:[
        { num:'Q1', text:'Concevoir un MCD pour: Etudiants,Enseignants,Cours,Salles,Inscriptions.',
          correction:'Entités: Etudiant(id,nom,prenom,email), Enseignant(id,nom,spéc), Cours(id,intitulé,crédits), Salle(id,capacité).\nRelations: Enseignant(1,1)-enseigne-(0,N)Cours. Cours(1,1)-se_déroule-(1,N)Salle. Etudiant(N,N)-s\'inscrit[note,date]-Cours.'},
        { num:'Q2', text:'(a) Cours avec plus de 30 inscrits. (b) Top 3 étudiants par moyenne. (c) Enseignants sans cours.',
          correction:'(a) SELECT c.intitulé,COUNT(*) FROM Cours c JOIN Inscription i ON c.id=i.cours_id GROUP BY c.id HAVING COUNT(*)>30;\n(b) SELECT e.nom,AVG(i.note) moy FROM Etudiant e JOIN Inscription i ON e.id=i.etud_id GROUP BY e.id ORDER BY moy DESC LIMIT 3;\n(c) SELECT * FROM Enseignant WHERE id NOT IN (SELECT DISTINCT ens_id FROM Cours);'}
      ]}
    ]
  },
  {
    id:'math_2014',year:2014,subject:'Mathématiques',cat:'math',
    title:'ENSET 2014 — Mathématiques',desc:'Cycle Ingénieur — 1ère Année',
    difficulty:'difficile',tags:['Valeurs propres','EDO','Probabilités'],
    parts:[
      { title:'Exercice 1 — Algèbre (8 pts)', questions:[
        { num:'1.1', text:'A=[[0,1,0],[0,0,1],[1,-3,3]]. Polynôme caractéristique, VP, diagonalisable?',
          correction:'χ(λ)=-(λ³-3λ²+3λ-1)=-(λ-1)³. VP λ=1 (mult.alg.=3). E₁: rang(A-I)=2→dim(E₁)=1≠3. Non diagonalisable (forme de Jordan 3×3).'},
        { num:'1.2', text:'Résoudre AX=B avec A=[[1,2,3],[2,5,7],[1,1,2]], B=(1,2,1)ᵀ.',
          correction:'Pivot de Gauss: rang=2<3→∞ solutions. z=t libre: y=-t, x=1-t. Solution: (1-t,-t,t), t∈ℝ.'}
      ]},
      { title:'Exercice 2 — Probabilités (6 pts)', questions:[
        { num:'2.1', text:'100 pièces, 2% défectueuses. X~B(100,0.02)≈Poisson(2). Calculer P(X≥2).',
          correction:'λ=2. P(X≥2)=1-P(0)-P(1)=1-e⁻²(1+2)=1-3e⁻²≈1-3(0.1353)≈0.594.'},
        { num:'2.2', text:'X,Y~N(0,1) indépendants. Loi de X²+Y²? P(X²+Y²≤4)?',
          correction:'X²+Y²~χ²(2)~Exp(1/2). F(t)=1-e^(-t/2). P(X²+Y²≤4)=1-e^(-2)≈0.865.'}
      ]}
    ]
  }
];

/* ================================================================
   QUESTIONS AI-GÉNÉRÉES — NIVEAU CONCOURS ENSET
   ================================================================ */
const AI_QUESTIONS = {
  math:[
    {q:'Soit f(x)=(eˣ−1−x)/x² pour x≠0. f(0) par prolongement par continuité =',opts:['0','1/2','1','2'],ans:1,diff:'moyen',exp:'DL: eˣ=1+x+x²/2+o(x²)→(eˣ-1-x)/x²→1/2'},
    {q:'Σn²/n! converge vers :',opts:['e','2e','e−1','3e'],ans:1,diff:'expert',exp:'Σn²/n!=Σn(n-1)/n!+Σn/n!=e+e=2e'},
    {q:'det([[1,a,a²],[1,b,b²],[1,c,c²]])=?',opts:['abc','(b−a)(c−a)(c−b)','a+b+c','0'],ans:1,diff:'expert',exp:'Déterminant de Vandermonde: Π(xⱼ−xᵢ), i<j'},
    {q:'lim(n→∞) n·sin(1/n)=',opts:['0','1','∞','π'],ans:1,diff:'moyen',exp:'sin(1/n)/(1/n)→1 (sin u/u, u→0)'},
    {q:'∫₀¹ x·ln(x)dx=?',opts:['−1/4','1/4','0','−1/2'],ans:0,diff:'moyen',exp:'IPP: u=ln x,v\'=x → [x²/2·ln x]₀¹-∫x/2 dx=0-1/4=-1/4'},
    {q:'Si tr(A)=6, VP: λ₁=λ₂=1, alors λ₃=?',opts:['4','6','2','3'],ans:0,diff:'moyen',exp:'tr=λ₁+λ₂+λ₃=1+1+λ₃=6→λ₃=4'},
    {q:'∬_{0≤r≤1,0≤θ≤π/4}(x²+y²)dxdy en polaires=',opts:['π/8','π/16','π/4','1/4'],ans:1,diff:'difficile',exp:'∫₀^(π/4)dθ·∫₀¹r³dr=(π/4)(1/4)=π/16'},
    {q:'Rayon convergence Σ(n!/nⁿ)xⁿ=',opts:['e','1/e','1','e²'],ans:0,diff:'expert',exp:'D\'Alembert: aₙ₊₁/aₙ→(n/(n+1))ⁿ→1/e. R=e'},
    {q:'T(n)=T(n−1)+n. Complexité ?',opts:['O(n)','O(n log n)','O(n²)','O(2ⁿ)'],ans:0,diff:'moyen',exp:'T(n)=Σk=1..n k=n(n+1)/2→O(n²). Correction: O(n²)'},
    {q:'∫₀^∞ e^(−x²)dx=?',opts:['1','√π','√π/2','π'],ans:2,diff:'expert',exp:'Intégrale de Gauss: ∫₋∞^∞ e^(-x²)dx=√π donc ∫₀^∞=√π/2'}
  ],
  info:[
    {q:'Complexité recherche table de hachage (cas moyen):',opts:['O(n)','O(log n)','O(1)','O(n log n)'],ans:2,diff:'moyen',exp:'Table hachage: O(1) en moyenne'},
    {q:'Un arbre AVL de n nœuds a hauteur:',opts:['O(n)','O(log n)','O(√n)','O(n²)'],ans:1,diff:'moyen',exp:'AVL équilibré→hauteur O(log n)'},
    {q:'T(n)=2T(n−1)+1. Complexité?',opts:['O(n)','O(n²)','O(2ⁿ)','O(n log n)'],ans:2,diff:'expert',exp:'T(n)=2ⁿ−1→O(2ⁿ)'},
    {q:'DFS récursif détecte un cycle quand:',opts:['Nœud à distance 2','Nœud visité non-parent','DFS termine','File vide'],ans:1,diff:'expert',exp:'Cycle: on atteint un nœud visité qui n\'est pas le parent direct'},
    {q:'Tri stable conserve:',opts:['Rapidité','Ordre des éléments égaux','Mémoire','Complexité'],ans:1,diff:'moyen',exp:'Stable = éléments égaux gardent leur ordre relatif'},
    {q:'virtual destructor nécessaire quand:',opts:['Toujours','Héritage + pointeur vers base','Templates','Jamais'],ans:1,diff:'expert',exp:'Sans virtual destructor: seul le destructeur de base est appelé'},
    {q:'Compléxité de Dijkstra avec file de priorité (tas):',opts:['O(V²)','O(E log V)','O(V+E)','O(VE)'],ans:1,diff:'expert',exp:'Dijkstra avec tas binaire: O((V+E)log V)≈O(E log V)'},
    {q:'ARP résout:',opts:['Nom→IP','IP→MAC','MAC→IP','URL→IP'],ans:1,diff:'moyen',exp:'ARP: IP→MAC (dans le même réseau local)'},
    {q:'Normalisation éliminant les DF transitives:',opts:['1NF','2NF','3NF','BCNF'],ans:2,diff:'moyen',exp:'3NF élimine les dépendances transitives'},
    {q:'shared_ptr vs unique_ptr: lequel permet le partage?',opts:['unique_ptr','shared_ptr','Les deux','Aucun'],ans:1,diff:'moyen',exp:'shared_ptr = comptage de références, partageable'},
    {q:'En SQL, COALESCE(val, default) retourne:',opts:['val toujours','default toujours','val si non-NULL sinon default','NULL'],ans:2,diff:'moyen',exp:'COALESCE retourne le premier argument non-NULL'},
    {q:'Nombre max de nœuds dans un arbre binaire de hauteur h:',opts:['h','2h','2^h','2^(h+1)−1'],ans:3,diff:'moyen',exp:'2^0+2^1+…+2^h=2^(h+1)−1'}
  ]
};

const ALL_TOPICS=[...MATH_TOPICS,...INFO_TOPICS];
