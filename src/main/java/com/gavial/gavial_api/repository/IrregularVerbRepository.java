package com.gavial.gavial_api.repository;

import com.gavial.gavial_api.model.IrregularVerb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IrregularVerbRepository extends JpaRepository<IrregularVerb, Long> {

}
