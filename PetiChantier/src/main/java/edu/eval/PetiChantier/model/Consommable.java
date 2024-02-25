package edu.eval.PetiChantier.model;

import com.fasterxml.jackson.annotation.JsonView;
import edu.eval.PetiChantier.vue.VueLocal;
import edu.eval.PetiChantier.vue.VueSite;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Consommable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

    @JsonView({VueLocal.class, VueSite.class})
    protected String nom;

    @JsonView(VueLocal.class)
    protected float cout;

    @JsonView(VueLocal.class)
    @ManyToOne(optional = false)
    protected Stock stock;

}
