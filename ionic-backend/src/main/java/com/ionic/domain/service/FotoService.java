package com.ionic.domain.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.ionic.domain.entity.Foto;
import com.ionic.domain.repository.IFotoRepository;
import com.ionic.infrastructure.FileWrapper;

@Service
@Transactional
public class FotoService 
{
	/**
	 * 
	 */
	@Autowired
	IFotoRepository fotoRepository;
	
	/**
	 * 
	 */
	@Autowired
	private FileWrapper fileWrapper;
	/**
	 * 
	 * @param fotoId
	 */
	public void findFotoRepositoryById(long fotoId)
	{
		
	}
	
	/**
	 * 
	 * @param file
	 * @param id
	 * @return
	 */
	public ResponseEntity<String> insertFoto(Foto foto) 
	{
		this.fotoRepository.saveAndFlush(foto);		
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Arquivo salvo!");
		
	}

	public List<Foto> listAllFotos() 
	{
		return this.fotoRepository.findAll();
	}

	public ResponseEntity<String> uploadFile(MultipartFile file, Long id) 
	{
		Foto equipment = fotoRepository.findOne(id);
		if ( equipment == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Equipamento nulo");
		}
		
		fileWrapper.write("files", file);
		
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Arquivo salvo!");
	}

}
