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
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

    @JsonView({VueSite.class, VueLocal.class})
    protected String nom;

    @JsonView(VueSite.class)
    @ManyToOne(optional = false)
    protected Local local;

}
