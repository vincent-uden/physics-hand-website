---
title: Thermal Physics
description: Thermal Physics
layout: ../../../layouts/MainLayout.astro
---

## Kinetic Theory of Gases
**Energy for each degree of freedom (law of equipartition of energy)**
$$
E = \frac{1}{2} kT
$$

**Collission number**
$$
n_s = \frac{N}{4V} \bar{v} = \frac{p}{\sqrt{s \pi m k T}}
$$

**Pressure**
$$
p = \frac{N}{3V} m \bar{v^2}
$$

**Mean free pat hof molecules in hard-sphere model**
$$
l = \frac{V}{\sqrt{2} \pi d^2 N} = \text{const} \cdot \frac{T}{p}
$$

**Collision frequency of molecules**
$$
\Gamma = \frac{\bar{v}}{l}
$$

**Molecular distribution of speeds and energies for an ideal gas**
$$
v_{mp} = \sqrt{\frac{2kT}{m}} = \sqrt{\frac{2RT}{M}} \\
\bar{v} = \sqrt{\frac{8kT}{\pi m}} = \sqrt{\frac{8RT}{\pi M}} \\
\sqrt{\bar{v^2}} = \sqrt{\frac{3kT}{m}} = \sqrt{\frac{3RT}{M}} \\
E_{mp} = \frac{1}{2} kT, \hspace{1em} U = N \bar{E}, \hspace{1em} \bar{E} = \frac{3}{2} kT
$$

**Maxwell-Boltzmann distribution**
$$
n(v)dv = C_1 v^2 e^{-\frac{mv^2}{2kT}} dv, \hspace{1em} n(E) dE = C_2 \sqrt{E} e^{-\frac{E}{kT}} dE \\
C_1 = \frac{4N}{\sqrt{\pi}} \left( \frac{m}{2kT} \right)^{\frac{3}{2}}, \hspace{1em} C_2 = \frac{2N}{\sqrt{\pi}} \left( \frac{1}{kT} \right)^{\frac{3}{2}}, 
$$

## Equations of State

**Ideal gas law**
$$
pV = nRT  \\
pV = NkT
$$

**Van der Waals law for non-ideal gas**
$$
\left(p + \frac{a}{(V/n)^2}\right) (V - nb) = n R T
$$
$a$ and $b$ are constants, see Section T-1.11.

Reduced equation (the law of corresponding states)
$$
\left( \pi + \frac{3}{\phi^2} \right) (3\phi - 1) = 8 \phi, \hspace{1em} \pi = \frac{p}{p_c} = \frac{V}{V_c} = \frac{T}{T_c} 
$$
$p_c, V_c$ and $T_c$ are the values at the critical point.

**Poisson's equation for a reversible adiabatic process of an ideal gas**
$$
pV^\gamma = \text{const}, \hspace{1em} TV^{\gamma-1} = \text{const}, \hspace{1em} Tp^{-(\gamma-1)/\gamma} = \text{const}, \hspace{1em} \gamma = \frac{C_p}{C_v}
$$