package com.portfoliozdanovicz.nz.Security.Repository;

import com.portfoliozdanovicz.nz.Security.Entity.Rol;
import com.portfoliozdanovicz.nz.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
