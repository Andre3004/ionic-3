package com.ionic.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ionic.domain.entity.Foto;

@Repository
@Transactional
public interface IFotoRepository extends JpaRepository<Foto, Long>
{

}
